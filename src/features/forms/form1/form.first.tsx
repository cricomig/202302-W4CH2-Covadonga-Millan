import "../../forms/forms.scss";
export function FormFirst() {
  return (
    <>
      <h2>Personal data</h2>
      <form className="forms">
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Last name:
            <input type="text" id="lastName" name="lastName" />
          </label>
        </div>
        <div>
          <label htmlFor="birthDate">
            Birth date:
            <input type="date" id="birthDate" name="birthDate" />
          </label>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <div>
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" value="male" />
              Male
            </label>
          </div>
          <div>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" value="female" />
              Female
            </label>
          </div>
          <div>
            {" "}
            <label htmlFor="other">
              <input type="radio" id="other" name="gender" value="other" />
              Other
            </label>
          </div>
          <div>
            {" "}
            <label htmlFor="preferNotToMention">
              <input
                type="radio"
                id="preferNotToMention"
                name="gender"
                value="preferNotToMention"
              />
              Prefer not to mention
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="newsletter">
            <input type="checkbox" id="newsletter" name="newsletter" />
            Subscribe to our newsletter
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
