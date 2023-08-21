
async function upload(data) {

    var response = await fetch("./api/uploads/auth", {
        method: "GET"
    });

    if (response.ok) {
        console.log(response);
    } else {
        alert("Failed to auth upload.");
        return;
    }

    auth = await response.json();

    var imagekit = new ImageKit({
        publicKey: auth.publicKey,
        urlEndpoint: auth.urlEndpoint
    });

    var uploadfile = document.getElementById("uploadfile");
//export this object to be used by itemData.js
    imagekit.upload({
        file: uploadfile.files[0],
        fileName: uploadfile.files[0].name + ".jpg",
        tags: [],
        token: auth.token,
        signature: auth.signature,
        expire: auth.expire,

    }, function (err, result) {

        console.log(arguments);

        document.getElementById("imageLink").href = result.url;
        document.getElementById("imageLink").text = result.url;
        document.getElementById("imagePreview").src = result.url;

        //Take results object and use for saving in database

        console.log(imagekit.url({
            src: result.url
        }));

    })

}

console.log("upload script loaded");

