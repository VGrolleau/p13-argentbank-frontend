import { updateUserProfile } from "../services/APIService";

function EditUsername(props) {
    const navUserFirstname = props.navUserFirstname;
    const firstName = props.firstName;
    const lastName = props.lastName;
    const token = props.token;

    return (
        <div>
            <h2 id="user-name"><span id="user-firstname">{firstName}</span> <span id="user-lastname">{lastName}</span>!</h2>
            <div>
                <button className="edit-button" onClick={openEdit}>Edit Name</button>
                <form className="edit-form">
                    <div id="edit-user-name">
                        <input type="text" id="input-firstname" />
                        <input type="text" id="input-lastname" />
                    </div>
                    <div id="edit-buttons">
                        <input type="submit" value="Save" className="edit-form-button" onClick={(e) => editUserName(token, navUserFirstname, e)} />
                        <input type="reset" value="Cancel" className="edit-form-button" onClick={(e) => editUserName(token, navUserFirstname, e)} />
                    </div>
                </form>
            </div>
        </div>
    )
}

function openEdit() {
    const userName = document.getElementById("user-name");
    const editButton = document.querySelector(".edit-button");
    const editForm = document.querySelector(".edit-form");
    const userFirstname = document.getElementById("user-firstname");
    const userLastname = document.getElementById("user-lastname");
    const inputFirstname = document.getElementById("input-firstname");
    const inputLastname = document.getElementById("input-lastname");

    userName.style.display = "none";
    editButton.style.display = "none";
    editForm.style.display = "block";

    inputFirstname.value = userFirstname.textContent;
    inputLastname.value = userLastname.textContent;
}

async function editUserName(token, navUserFirstname, e) {
    e.preventDefault();

    const userName = document.getElementById("user-name");
    const editButton = document.querySelector(".edit-button");
    const editForm = document.querySelector(".edit-form");
    const userFirstname = document.getElementById("user-firstname");
    const userLastname = document.getElementById("user-lastname");
    const inputFirstname = document.getElementById("input-firstname");
    const inputLastname = document.getElementById("input-lastname");

    userName.style.display = "initial";
    editButton.style.display = "initial";
    editForm.style.display = "none";

    userFirstname.textContent = inputFirstname.value;
    userLastname.textContent = inputLastname.value;
    navUserFirstname.textContent = inputFirstname.value;

    try {
        let actualData = await updateUserProfile(token, inputFirstname.value, inputLastname.value);

        // check for error response
        if (!actualData.body) {
            // get error message from body or default to response status
            const error = (actualData && actualData.message) || actualData.status;
            return Promise.reject(error);
        }
    } catch (error) {
        console.error('There was an error!', error);
    }
}

export default EditUsername;