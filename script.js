// Logic to fil the table
const showPasswords = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");

  if (data == null) {
    tb.innerHTML = "No Data to show";
  } else {
    tb.innerHTML = `<tr>
                    <th>Website</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Delete</th>
                </tr>`;
    let arr = JSON.parse(data);
    let str = "";
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      str += `<tr>
            <td>${element.website}</td>
            <td>${element.username}</td>
            <td>${element.password}</td>
            <td>${"Delete"}</td>
        </tr>`;
    }

    tb.innerHTML += str;
  }
};

console.log("Working");
showPasswords();
document.querySelector(".button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked...");
  console.log(username.value, password.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
  if (passwords == null) {
    let json = [];
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPasswords();
});
