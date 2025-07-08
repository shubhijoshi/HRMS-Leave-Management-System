function loadLeaveRequests() {
  const leaveRequests = JSON.parse(localStorage.getItem("leaves")) || [];
  const tbody = document.getElementById("leave-requests-body");
  tbody.innerHTML = "";

  leaveRequests.forEach((req, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
  <td>${req.name || "Unknown"}</td>
  <td>${req.type}</td>
  <td>${req.from}</td>
  <td>${req.to}</td>
  <td>${req.reason || "N/A"}</td> <!-- ADD THIS -->
  <td class="status ${req.status?.toLowerCase() || 'pending'}">${req.status || "Pending"}</td>
  <td>
    <button class="btn approve" ${req.status !== 'Pending' ? 'disabled' : ''} onclick="updateStatus(${index}, 'Approved')">Approve</button>
    <button class="btn reject" ${req.status !== 'Pending' ? 'disabled' : ''} onclick="updateStatus(${index}, 'Rejected')">Reject</button>
  </td>
`;

    tbody.appendChild(tr);
  });
}

function updateStatus(index, newStatus) {
  const leaveRequests = JSON.parse(localStorage.getItem("leaves")) || [];
  if (!leaveRequests[index]) return;

  leaveRequests[index].status = newStatus;
  localStorage.setItem("leaves", JSON.stringify(leaveRequests));
  loadLeaveRequests();
}

window.onload = loadLeaveRequests;
