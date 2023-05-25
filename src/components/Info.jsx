export const Info = ({displayResult}) => {
    const {currentColor, blackCount, whiteCount, result} = displayResult()
    return (
        <>
            <h2 class="info">
                黒石: {blackCount}個
            </h2>
            <h2 class="info">
                白石: {whiteCount}個
            </h2>
            <h2>
                現在の手番: {currentColor}
            </h2>
            <h1 class="info">
                {result}
            </h1>
        </>
    )
}