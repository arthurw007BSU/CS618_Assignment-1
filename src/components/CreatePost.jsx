export function CreatePost() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <lable htmlFor='create-title'>Title:</lable>
        <input type='text' name='create-title' id='create-title' />
      </div>
      <br />
      <div>
        <lable htmlFor='create-author'>Author:</lable>
        <input type='text' name='create-author' id='create-author' />
      </div>
      <br />
      <textarea />
      <br />
      <br />
      <input type='submit' value='Create' />
    </form>
  )
}
