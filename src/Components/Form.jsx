

function Form() {
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(e.target.name.value)
    console.log(e.target.email.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className="input border-green-400 " type="text" name="name" id="name" placeholder="name" /> <br /> <br />
      <input className="input border-green-400" type="email" name="" id="email" placeholder="email" /> <br /> <br />
      <button className="btn rounded-lg" type="submit">Submit</button>
    </form>
  )
}

export default Form
