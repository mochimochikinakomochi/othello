export const Square = ({value = null, onSquareClick, index}) => {
    return (
        <td class="square" onClick={onSquareClick}>
            <div class={value}></div>
            <div class={index}></div>
        </td>
    )
}