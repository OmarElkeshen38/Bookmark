var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var siteContainer;

if (localStorage.getItem("siteSave") == null) {
    siteContainer = [];
}
else {
    siteContainer = JSON.parse(localStorage.getItem("siteSave"));
    displaySite();
}

function addSite () {
    var site = {
        sName: siteName.value,
        sUrl: siteUrl.value
    }
    siteContainer.push(site);
    localStorage.setItem("siteSave", JSON.stringify(siteContainer));
    displaySite();
    clareForm()
}

function displaySite() {
    var cartona = ``;
    for (var i = 0; i < siteContainer.length; i++) {
        cartona += `
                <div class="container">
                    <div class="cartona row py-4 mx-5 my-2 d-flex justify-content-between align-items-center">
                        <div class="siteName col-lg-6 col-md-3">
                            <p class="fw-bold fs-2">${siteContainer[i].sName}</p>
                        </div>
                        <div class="siteControl col-lg-6 col-md-8 d-flex justify-content-center">
                            <a href="${siteContainer[i].sUrl}" class="btn border rounded-pill mx-3 px-4 fw-bold py-2">Visit</a>
                            <button onclick="deleteSite(${i})" class="btn border rounded-pill px-4 fw-bold py-2">Delete</button>
                        </div>
                        <hr class="mt-3">
                    </div>
                </div>
        `
    }
    document.getElementById("theSiteSave").innerHTML = cartona;
}

function clareForm() {
    siteName.value = '';
    siteUrl.value = '';
}

function deleteSite(a){
    siteContainer.splice(a,1);
    localStorage.setItem("siteSave", JSON.stringify(siteContainer));
    displaySite();
}