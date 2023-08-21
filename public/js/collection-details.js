const buttonDelete = document.getElementById("delete-collection");

buttonDelete.addEventListener("click", deleteCollection);

async function deleteCollection(event) {
  event.preventDefault();

  const collectionID = location.pathname.split("/")[2];

  const response = await fetch(`/api/collections/${collectionID}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/collections");
  } else {
    alert("NOT GOOD!");
  }
}
