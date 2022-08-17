import React from 'react'

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            email:"",
            password:"",
            repeatPassword:"",
            okayToEmail:""
        }
    )

    function handleChange(event){
        const {name, value, type, checked} = event.target

        setFormData(prevState => {
            return{
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    console.log(formData)

    return (
        <div>
            <form>
                <input 
                    type="email" 
                    placeholder='Email address'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                 />
                 <br />
                 <input 
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                 />
                 <br />
                 <input 
                    type="password"
                    placeholder='Confirm password'
                    name='repeatPassword'
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />
                <br />
                <input
                    id='okayToEmail'
                    type="checkbox"
                    name='okayToEmail'
                    checked={formData.okayToEmail}
                    onChange={handleChange}
                />
                <label htmlFor='okayToEmail'>I want to join the newsletter</label>
                <br />
                <button>Sign up</button>
            </form>
        </div>
    )
}
