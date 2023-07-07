// ID: quote AND author AND button AND getQuote
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  // console.log("Button Clicked");  // Test
  try {
    // This happens while loading quote
    btnEl.innerHTML = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerHTML = "Update in progress...";
    authorEl.innerHTML = "Update in progress...";

    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerHTML = quoteContent;
    authorEl.innerHTML = "~ " + quoteAuthor;
    btnEl.innerHTML = "Get A Quote";
    btnEl.disabled = false;
  
    //console.log(data);  // Test
    // console.log(quoteContent);  // Test
    // console.log(quoteAuthor);  // Test
    // console.log(quoteContent, quoteAuthor);  // Test
  } catch (error) {
    // This happens if there is an error
    console.log("Whoops, no quote", error);
    quoteEl.innerHTML = "Whoops, no quote. Try again later.";
    authorEl.innerHTML = "";
    btnEl.innerHTML = "Get A Quote";
    btnEl.disabled = false;
  }
}

// This gives a quote on page load
getQuote();

btnEl.addEventListener("click", getQuote);

// async / await waits for the fetch to complete before moving on to the next line of code
