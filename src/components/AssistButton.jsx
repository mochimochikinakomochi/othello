const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px",
}


export const AssistButton = ({isAssisted, isEnd, handleAssistButton}) => {
    return (
        <>
            <button style={style} disabled={isAssisted || isEnd} onClick={handleAssistButton}>アシスト</button>
            <button style={style} disabled={!isAssisted || isEnd} onClick={handleAssistButton}>アシスト解除</button>
        </>
    )
}