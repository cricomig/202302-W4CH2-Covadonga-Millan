import "../../forms/forms.scss";
export function FormFirst() {
  return (
    <>
      <h2>Personal data</h2>
      <form className="forms">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="birthDate">Birth date:</label>
          <input type="date" id="birthDate" name="birthDate" />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
          <div>
            <input
              type="radio"
              id="preferNotToMention"
              name="gender"
              value="preferNotToMention"
            />
            <label htmlFor="preferNotToMention">Prefer not to mention</label>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <input type="checkbox" id="newsletter" name="newsletter" />
          <label htmlFor="newsletter">Subscribe to our newsletter</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
