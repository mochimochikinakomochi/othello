import { Square } from "./Square";

export const Board = ({squares, handleClick, legalSquares}) => {

    return (
        <>
        <table className="board">
            {/* row 1 */}
            <tr>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} index={legalSquares[0]} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} index={legalSquares[1]} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} index={legalSquares[2]} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} index={legalSquares[3]} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} index={legalSquares[4]} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} index={legalSquares[5]} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} index={legalSquares[6]} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} index={legalSquares[7]} />
            </tr>
            {/* row 2 */}
            <tr>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} index={legalSquares[8]} />
                <Square value={squares[9]} onSquareClick={() => handleClick(9)} index={legalSquares[9]} />
                <Square value={squares[10]} onSquareClick={() => handleClick(10)} index={legalSquares[10]} />
                <Square value={squares[11]} onSquareClick={() => handleClick(11)} index={legalSquares[11]} />
                <Square value={squares[12]} onSquareClick={() => handleClick(12)} index={legalSquares[12]} />
                <Square value={squares[13]} onSquareClick={() => handleClick(13)} index={legalSquares[13]} />
                <Square value={squares[14]} onSquareClick={() => handleClick(14)} index={legalSquares[14]} />
                <Square value={squares[15]} onSquareClick={() => handleClick(15)} index={legalSquares[15]} />
            </tr>
            {/* row 3 */}
            <tr>
                <Square value={squares[16]} onSquareClick={() => handleClick(16)} index={legalSquares[16]} />
                <Square value={squares[17]} onSquareClick={() => handleClick(17)} index={legalSquares[17]} />
                <Square value={squares[18]} onSquareClick={() => handleClick(18)} index={legalSquares[18]} />
                <Square value={squares[19]} onSquareClick={() => handleClick(19)} index={legalSquares[19]} />
                <Square value={squares[20]} onSquareClick={() => handleClick(20)} index={legalSquares[20]} />
                <Square value={squares[21]} onSquareClick={() => handleClick(21)} index={legalSquares[21]} />
                <Square value={squares[22]} onSquareClick={() => handleClick(22)} index={legalSquares[22]} />
                <Square value={squares[23]} onSquareClick={() => handleClick(23)} index={legalSquares[23]} />
            </tr>
            {/* row 4 */}
            <tr>
                <Square value={squares[24]} onSquareClick={() => handleClick(24)} index={legalSquares[24]} />
                <Square value={squares[25]} onSquareClick={() => handleClick(25)} index={legalSquares[25]} />
                <Square value={squares[26]} onSquareClick={() => handleClick(26)} index={legalSquares[26]} />
                <Square value={squares[27]} onSquareClick={() => handleClick(27)} index={legalSquares[27]} />
                <Square value={squares[28]} onSquareClick={() => handleClick(28)} index={legalSquares[28]} />
                <Square value={squares[29]} onSquareClick={() => handleClick(29)} index={legalSquares[29]} />
                <Square value={squares[30]} onSquareClick={() => handleClick(30)} index={legalSquares[30]} />
                <Square value={squares[31]} onSquareClick={() => handleClick(31)} index={legalSquares[31]} />
            </tr>
            {/* row 5 */}
            <tr>
                <Square value={squares[32]} onSquareClick={() => handleClick(32)} index={legalSquares[32]} />
                <Square value={squares[33]} onSquareClick={() => handleClick(33)} index={legalSquares[33]} />
                <Square value={squares[34]} onSquareClick={() => handleClick(34)} index={legalSquares[34]} />
                <Square value={squares[35]} onSquareClick={() => handleClick(35)} index={legalSquares[35]} />
                <Square value={squares[36]} onSquareClick={() => handleClick(36)} index={legalSquares[36]} />
                <Square value={squares[37]} onSquareClick={() => handleClick(37)} index={legalSquares[37]} />
                <Square value={squares[38]} onSquareClick={() => handleClick(38)} index={legalSquares[38]} />
                <Square value={squares[39]} onSquareClick={() => handleClick(39)} index={legalSquares[39]} />
            </tr>
            {/* row 6 */}
            <tr>
                <Square value={squares[40]} onSquareClick={() => handleClick(40)} index={legalSquares[40]} />
                <Square value={squares[41]} onSquareClick={() => handleClick(41)} index={legalSquares[41]} />
                <Square value={squares[42]} onSquareClick={() => handleClick(42)} index={legalSquares[42]} />
                <Square value={squares[43]} onSquareClick={() => handleClick(43)} index={legalSquares[43]} />
                <Square value={squares[44]} onSquareClick={() => handleClick(44)} index={legalSquares[44]} />
                <Square value={squares[45]} onSquareClick={() => handleClick(45)} index={legalSquares[45]} />
                <Square value={squares[46]} onSquareClick={() => handleClick(46)} index={legalSquares[46]} />
                <Square value={squares[47]} onSquareClick={() => handleClick(47)} index={legalSquares[47]} />
            </tr>
            {/* row 7 */}
            <tr>
                <Square value={squares[48]} onSquareClick={() => handleClick(48)} index={legalSquares[48]} />
                <Square value={squares[49]} onSquareClick={() => handleClick(49)} index={legalSquares[49]} />
                <Square value={squares[50]} onSquareClick={() => handleClick(50)} index={legalSquares[50]} />
                <Square value={squares[51]} onSquareClick={() => handleClick(51)} index={legalSquares[51]} />
                <Square value={squares[52]} onSquareClick={() => handleClick(52)} index={legalSquares[52]} />
                <Square value={squares[53]} onSquareClick={() => handleClick(53)} index={legalSquares[53]} />
                <Square value={squares[54]} onSquareClick={() => handleClick(54)} index={legalSquares[54]} />
                <Square value={squares[55]} onSquareClick={() => handleClick(55)} index={legalSquares[55]} />
            </tr>
            {/* row 8 */}
            <tr>
                <Square value={squares[56]} onSquareClick={() => handleClick(56)} index={legalSquares[56]} />  
                <Square value={squares[57]} onSquareClick={() => handleClick(57)} index={legalSquares[57]} />
                <Square value={squares[58]} onSquareClick={() => handleClick(58)} index={legalSquares[58]} />
                <Square value={squares[59]} onSquareClick={() => handleClick(59)} index={legalSquares[59]} />
                <Square value={squares[60]} onSquareClick={() => handleClick(60)} index={legalSquares[60]} />
                <Square value={squares[61]} onSquareClick={() => handleClick(61)} index={legalSquares[61]} />
                <Square value={squares[62]} onSquareClick={() => handleClick(62)} index={legalSquares[62]} />
                <Square value={squares[63]} onSquareClick={() => handleClick(63)} index={legalSquares[63]} />
            </tr>
        </table>
        </>
    )
}


