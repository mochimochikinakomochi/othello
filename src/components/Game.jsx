import { useState } from "react";
import { Board } from "./Board";
import { Info } from "./Info";
import { AssistButton } from "./AssistButton";
import { ChangeBoardButton } from "./ChangeBoardButton";


export const Game = () => {
    // 方向(2進数)
    const NONE = 0;
    const LEFT = 2**0; // =1
    const UPPER_LEFT = 2**1; // =2 
    const UPPER = 2**2; // =4
    const UPPER_RIGHT = 2**3; // =8
    const RIGHT = 2**4; // =16
    const LOWER_RIGHT = 2**5; // =32
    const LOWER = 2**6; // =64
    const LOWER_LEFT = 2**7; // =128

    const [history, setHistory] = useState([[null, null, null, null, null, null, null, null, 
                                             null, null, null, null, null, null, null, null, 
                                             null, null, null, null, null, null, null, null, 
                                             null, null, null, "white", "black", null, null, null, 
                                             null, null, null, "black", "white", null, null, null, 
                                             null, null, null, null, null, null, null, null, 
                                             null, null, null, null, null, null, null, null, 
                                             null, null, null, null, null, null, null, null]])
    console.log("history", history)

    const movAbleDir = [0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 64, 0, 0, 0, 0, 
                        0, 0, 16, 0, 0, 0, 0, 0, 
                        0, 0, 0, 0, 0, 1, 0, 0, 
                        0, 0, 0, 0, 4, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 
                        0, 0, 0, 0, 0, 0, 0, 0]

    const movAblePos = [false, false, false, false, false, false, false, false,
                        false, false, false, false, false, false, false, false,
                        false, false, false, true, false, false, false, false, 
                        false, false, true, false, false, false, false, false,
                        false, false, false, false, false, true, false, false, 
                        false, false, false, false, true, false, false, false, 
                        false, false, false, false, false, false, false, false,
                        false, false, false, false, false, false, false, false]

    const [currentMove, setCurrentMove] = useState(0)
    const [isEnd, setIsEnd] = useState(false)
    const blackIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove]
    const color = blackIsNext ? "black" : "white"
    const enemyColor = blackIsNext ? "white" : "black"
    const [result, setResult] = useState(null)
    const [isAssisted, setIsAssisted] = useState(true)

    /* クリックされたときに実行される関数
        historyとcurrentMoveを更新する */
    const handleClick = (clickedPosition) => {
        if(movAblePos.every((elm) => elm === false)) {
            // passの場合
            /* console.log("pass")
            const nextSquares = currentSquares.slice()
            jumpTo(nextSquares) */
            return
        } else if(movAblePos[clickedPosition] === false) {
            // クリックした場所に置けない場合
            console.log("notLegal")
            return
        } else {
            console.log("OK")
            const nextSquares = flipDices(clickedPosition)
            jumpTo(nextSquares)
            return "OK"
        }
    }

    // historyとcurrentMoveの更新
    const jumpTo = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    // initMovAbleの実行とisEndの更新
    const displayResult = () => {
        // 勝者を判定しresultを更新
        const calculateWinner = () => {
            if(blackCount >= whiteCount) {
                setResult("黒の勝利")
            } else if(blackCount <= whiteCount) {
                console.log(200)
                setResult("白の勝利")
                console.log("result", result)
            } else {
                setResult("引き分け")
            }
        }

        // 黒石と白石の数をカウント
        let blackCount = 0
        let whiteCount = 0
        for(let i = 0; i < 64; i++) {
            if(history[currentMove][i] === "black") {
                blackCount += 1
            } else if(history[currentMove][i] === "white") {
                whiteCount += 1
            }
        }

        const info = {
            currentColor: color,
            blackCount: blackCount,
            whiteCount: whiteCount
        }

        // 二回passされた場合ゲーム終了
        if((currentMove > 2 && history[currentMove - 2].toString() === history[currentMove - 1].toString() && history[currentMove - 1].toString() === history[currentMove].toString())) {
            console.log("isEnd", isEnd)
            setIsEnd(true)
            calculateWinner()
            info.result = result
            return info
        }   
        // movAbleDirとmovAblePosの更新
        initMovAble()

        info.result = result
        return info
    }


    // nextSquaresを返す関数
    function flipDices(position) {
        const x = position % 8;
        const y = Math.floor(position / 8);
        const nextSquares = currentSquares.slice()

        nextSquares[position] = color;

        function subFlipDices(dx, dy, direction) {
            if(movAbleDir[position] & direction) {
                let x_tmp = x + dx;
                let y_tmp = y + dy;

                // 相手の石がある限りループを回す
                while(currentSquares[x_tmp + 8*y_tmp] === enemyColor && x_tmp >= 0 && x_tmp <= 7 && y_tmp >= 0 && y_tmp <= 7) {
                    nextSquares[x_tmp + 8*y_tmp] = color;
                    x_tmp = x_tmp + dx;
                    y_tmp = y_tmp + dy;
                }
            }
        } // subFlipDicesのかっこ

        // 左
        subFlipDices(-1, 0, LEFT)

        // 左上
        subFlipDices(-1, -1, UPPER_LEFT)

        // 上
        subFlipDices(0, -1, UPPER)

        // 右上
        subFlipDices(1, -1, UPPER_RIGHT)

        // 右
        subFlipDices(1, 0, RIGHT)

        // 右下
        subFlipDices(1, 1, LOWER_RIGHT)

        // 下
        subFlipDices(0, 1, LOWER)

        // 左下
        subFlipDices(-1, 1, LOWER_LEFT)

        return nextSquares
    } // flipDicesのかっこ


    // 置ける場所、裏返る方向を更新する関数
    function initMovAble() {
        let dir = NONE;
        for(var position=0; position<64; position++){
            dir = checkMobility(position);
            movAbleDir[position] = dir;

            if(dir !== NONE) {
                movAblePos[position] = true;
            } else {
                movAblePos[position] = false;
            }
        }
    } // initMovAbleのかっこ


    // ある場所について、置けるか、置けた場合どの方向に裏返るかを返す関数
    function checkMobility(position) {
        let dir = NONE;
        const x = position % 8;
        const y = Math.floor(position / 8);

        // すでに置いてある場所は置けない
        if (currentSquares[position]) {
            return dir;
        }

        // ある方向に裏返るかを判定
        function subCheckMobility(x, y, dx, dy, direction) {

            // iからdx, dy方向に石が置けるか
            if (currentSquares[(x + dx) + 8*(y + dy)] === enemyColor && ((x + dx) >= 0) && ((x + dx) <= 7) && ((y + dy) >= 0) && ((y + dy) <= 7) && ((x + 2*dx) >= 0) && ((x + 2*dx) <= 7) && ((y + 2*dy) >= 0) && ((y + 2*dy) <= 7)) {
                let x_tmp = x + 2*dx;
                let y_tmp = y + 2*dy;
                
                // 相手の石が続いているだけループ
                while(currentSquares[x_tmp + 8*y_tmp] === enemyColor && (x_tmp >= 0) && (x_tmp <= 7) && (y_tmp >= 0) && (y_tmp <= 7)) {
                    x_tmp = x_tmp + dx;
                    y_tmp = y_tmp + dy;
                }

                // 相手の石を挟んで自分の石があればdirを更新
                if(currentSquares[x_tmp + 8*y_tmp] === color && (x_tmp >= 0) && (x_tmp <= 7) && (y_tmp >= 0) && (y_tmp <= 7)){
                    dir = dir | direction;
                }
            } else {
                return 
            }
        } //subCheckMobilityのかっこ

        // 左
        subCheckMobility(x, y, -1, 0, LEFT)

        // 左上
        subCheckMobility(x, y, -1, -1, UPPER_LEFT)

        // 上
        subCheckMobility(x, y, 0, -1, UPPER)

        // 右上
        subCheckMobility(x, y, 1, -1, UPPER_RIGHT)

        // 右
        subCheckMobility(x, y, 1, 0, RIGHT)

        // 右下
        subCheckMobility(x, y, 1, 1, LOWER_RIGHT)

        // 下
        subCheckMobility(x, y, 0, 1, LOWER)

        // 左下
        subCheckMobility(x, y, -1, 1, LOWER_LEFT)

        return dir;
    } //checkMobilityのかっこ

    /* 置ける場所は"OK"、置けない場所は"NO"と定義した配列を返す関数
        もしisAssistedがfalseなら全て"NO"と定義した配列を返す */
    const getLegalSquares = () => {
        const legalSquares = Array(64).fill("NO")
        if(!isAssisted) {
            return legalSquares
        } else {
            for(let i=0; i<64; i++) {
                if(movAblePos[i] === true) {
                    legalSquares[i] = "OK"
                }
            }
            return legalSquares
        }
    }

    // アシスト機能を切り替える
    const handleAssistButton = () => {
        setIsAssisted(!isAssisted)
    }

    // 
    const handleChangeBoardButton = (go) => {
        let delta = 0
        console.log((go && (currentMove < history.length - 1)))
        if(go && currentMove < history.length - 1) {
            delta = 1
        } else if(!go && currentMove > 0) {
            delta = -1
        } 
        setCurrentMove(currentMove + delta)
    }

    // パスの判定と終局判定
    if(!isEnd) {
        initMovAble()
        if(movAblePos.every((elm) => elm === false)) {
            // passの場合
            console.log("pass")
            const nextSquares = currentSquares.slice()
            jumpTo(nextSquares)
        }
        if((currentMove > 2 && history[currentMove - 2].toString() === history[currentMove - 1].toString() && history[currentMove - 1].toString() === history[currentMove].toString())) {
            console.log("isEnd", isEnd)
            setIsEnd(true)
            setIsAssisted(false)
        }  
    }
      

    return (
        <div className="game">
            <div className="gameinfo">
                <AssistButton isAssisted={isAssisted} isEnd={isEnd} handleAssistButton={handleAssistButton} />
            </div>
            <div>
                <ChangeBoardButton handleChangeBoardButton={handleChangeBoardButton} />
            </div>
            <div>
                <Info displayResult={displayResult} />
            </div>
            <div className="gameBoard">
                <Board squares={currentSquares} handleClick={handleClick} legalSquares={getLegalSquares()} />
            </div>
        </div>
    )
}