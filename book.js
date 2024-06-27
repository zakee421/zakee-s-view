document.addEventListener("DOMContentLoaded", function() {
    var mainPopupOverlay = document.getElementById("main-popup-overlay");
    var mainPopupBox = document.getElementById("main-popup-box");
    var addPopupButton = document.getElementById("add-popup-button");
    var cancelButton = document.getElementById("cancel-popup");
    var bookForm = document.getElementById("book-form");
    var bookContainer = document.getElementById("book-container");

    var confirmationPopupOverlay = document.getElementById("confirmation-popup-overlay");
    var confirmationPopupBox = document.getElementById("confirmation-popup-box");
    var confirmDeleteButton = document.getElementById("confirm-delete");
    var cancelDeleteButton = document.getElementById("cancel-delete");
    var bookToDelete = null;

    addPopupButton.addEventListener("click", function(event) {
        event.preventDefault();
        mainPopupOverlay.style.display = 'block';
        mainPopupBox.style.display = 'block';
    });

    cancelButton.addEventListener("click", function(event) {
        event.preventDefault();
        mainPopupOverlay.style.display = 'none';
        mainPopupBox.style.display = 'none';
    });

    bookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var title = document.getElementById("book-title-input","underline").value;
        var author = document.getElementById("book-author-input").value;
        var description = document.getElementById("book-description-input").value;

        var newBookDiv = document.createElement("div");
        newBookDiv.classList.add("book-container");

        var bookTitle = document.createElement("h2");
        bookTitle.textContent = title;
        newBookDiv.appendChild(bookTitle);

        var bookAuthor = document.createElement("h4");
        bookAuthor.textContent = author;
        newBookDiv.appendChild(bookAuthor);

        var bookDescription = document.createElement("p");
        bookDescription.textContent = description;
        newBookDiv.appendChild(bookDescription);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            bookToDelete = newBookDiv;
            showConfirmationPopup();
        });
        newBookDiv.appendChild(deleteButton);

        bookContainer.appendChild(newBookDiv);

        // Clear form fields
        document.getElementById("book-title-input").value = '';
        document.getElementById("book-author-input").value = '';
        document.getElementById("book-description-input").value = '';

        // Hide popup
        mainPopupOverlay.style.display = 'none';
        mainPopupBox.style.display = 'none';
    });

    confirmDeleteButton.addEventListener("click", function() {
        if (bookToDelete) {
            bookToDelete.remove();
        }
        hideConfirmationPopup();
    });

    cancelDeleteButton.addEventListener("click", function() {
        hideConfirmationPopup();
    });

    function showConfirmationPopup() {
        confirmationPopupOverlay.style.display = 'block';
        confirmationPopupBox.style.display = 'block';
    }

    function hideConfirmationPopup() {
        confirmationPopupOverlay.style.display = 'none';
        confirmationPopupBox.style.display = 'none';
    }
   
});

var defaultdelete=document.getElementById("defaultzz")
var defaultbox=document.getElementById("dbox")
function dd() {
    defaultbox.style.display = "none"
}

