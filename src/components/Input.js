export default function Input({text}) {
    return (
    <form>
        <label for="todo">{text}</label>
        <input type="text" id="todo" name="todo" placeholder="Please enter an item.."/>
    </form>

    )
}