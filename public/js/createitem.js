

async function saveItem(imageUrl) {

    var data = {
        name: document.getElementById("itemName").value,
        description: document.getElementById("itemDescription").value,
        filename: imageUrl,
        date_of_collection: new Date(),
        collection_id: document.getElementById("collection_id").value
    }

    var response = await fetch("../api/items/item", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(response.ok){
        console.log(response);
        location.reload();
    } else {
        console.log("Failed to save item");
    }

}

async function uploadImage() {

    var response = await fetch("../api/uploads/auth", {
        method: "GET"
    });

    if (response.ok) {
        console.log(response);
    } else {
        alert("Failed to auth image upload.");
        return;
    }

    auth = await response.json();

    var imagekit = new ImageKit({
        publicKey: auth.publicKey,
        urlEndpoint: auth.urlEndpoint
    });

    var uploadfile = document.getElementById("uploadfile");

    imagekit.upload({
        file: uploadfile.files[0],
        fileName: uploadfile.files[0].name + ".jpg",
        tags: [],
        token: auth.token,
        signature: auth.signature,
        expire: auth.expire,

    }, function (err, result) {

        saveItem(result.url);

    });

}

