function handleSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const ingredients = document.getElementById("ingredients").value.trim();
    const recipe = document.getElementById("recipe").value.trim();
    const fileInput = document.getElementById("fileUpload");

    if (!title || !ingredients || !recipe) {
      alert("Please fill in all required fields.");
      return;
    }
    if (fileInput.files.length === 0) {
      alert("Please upload an image or file.");
      return;
    }

    alert("Form submitted successfully!");
    document.getElementById("blogForm").reset();
  }