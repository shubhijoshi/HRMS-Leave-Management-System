function submitLeave(e) {
  e.preventDefault();
  const name = document.getElementById("employee-name").value;
  const type = document.getElementById("leave-type").value;
  const from = document.getElementById("from-date").value;
  const to = document.getElementById("to-date").value;
  const reason = document.getElementById("reason").value;

  // Extra validation: From should be <= To
  if (new Date(from) > new Date(to)) {
    alert("From date cannot be after To date!");
    return;
  }

  const leave = { name, type, from, to, reason, status: "Pending" };
  // Get existing leaves
  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
  leaves.push(leave);
  localStorage.setItem("leaves", JSON.stringify(leaves));

  alert("Leave submitted successfully!");
  displayLeaveHistory();  // Update history view
  e.target.reset();       // Clear form
}

function displayLeaveHistory() {
  const historyDiv = document.getElementById("leave-history");
  if (!historyDiv) return;

  const leaves = JSON.parse(localStorage.getItem("leaves")) || [];

  historyDiv.innerHTML = leaves.map((l, i) => `
  <div class="leave-record">
    <strong>${i + 1}. ${l.type} Leave</strong><br>
    ${l.from} to ${l.to}<br>
    Reason: ${l.reason}<br>
    <span style="color: ${
      l.status === "Approved" ? "green" : 
      l.status === "Rejected" ? "red" : "gray"
    }">
      Status: ${l.status || "Pending"}
    </span><br>
    <button onclick="deleteLeave(${i})">Delete</button>
    <hr>
  </div>
`).join("");
}

function deleteLeave(index) {
  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
  leaves.splice(index, 1); // Remove the selected leave
  localStorage.setItem("leaves", JSON.stringify(leaves));
  displayLeaveHistory(); // Refresh view
}

window.onload = function () {
  displayLeaveHistory();
  // const fromInput = document.getElementById("from-date");
  // const toInput = document.getElementById("to-date");
  // toInput.disabled = true;
  // fromInput.addEventListener("change", function () {
  //   toInput.disabled = false;
  //   toInput.min = fromInput.value;
  // });
};
//the above commented code, if we want to disable the dates before the "from" date for "to" date
//but when user updates the "from" date again, there could be issue, so we add event listener
//but as of now the alert declared very above will be fine 