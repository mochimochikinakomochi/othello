const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px",
}

export const ChangeBoardButton = ({handleChangeBoardButton}) => {
    return (
        <>
        <button style={style} onClick={() => handleChangeBoardButton(false)}>一手戻る</button>
        <button style={style} onClick={() => handleChangeBoardButton(true)}>一手進める</button>
        </>
    )
}