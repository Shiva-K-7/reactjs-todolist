export default function FindLargestWord(props) {
    // eslint-disable-next-line react/prop-types
    const {inputValue} = props
    // eslint-disable-next-line react/prop-types
    const inputSplit = inputValue.split(' ')
    let maxWordLen = inputSplit[0].length
    let word = ''
    for (let i = 1; i < inputSplit.length; i++) {
        if (inputSplit[i].length > maxWordLen) {
            maxWordLen = inputSplit[i].length
            word = inputSplit[i]
        }
    }
    return (
        <div>
            <p>longest word = {word} with length {maxWordLen}</p>
        </div>
    )
}