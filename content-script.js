// const btnPlay = document.getElementById("contents");
// const btnImg = document.getElementById("container");
// const currentUrl = window.location.href;

// if(btnImg){
//   alert('yes')
//   btnImg.addEventListener("click", () => {
//   console.log("картинка");
// });
// } else alert ('nope')

// if(btnPlay){
// alert('contents получен')
// btnPlay.addEventListener("click", () => {
// console.log("говно");
// console.log(currentUrl, "url!!!!");
// const btnclick = document.querySelector(".ytp-volume-panel");

// if (btnclick) {
//   btnclick.addEventListener("click", function () {
//     btnclick.blur();
//     console.log("хуй");
//   });
// }
// });
// }else alert('не получен')

// const config = {
//   attributes: true,
//   childList: true,
//   subtree: true
// };

// const observer = new MutationObserver(()=> {
//   btnclick.addEventListener("click", function () {
//     btnclick.blur();
//     console.log("хуй");
//   });
// })

// observer.observe(btnclick, config)

// Create a new MutationObserver
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    // Check if a new node has been added
    if (mutation.type === "childList") {
      // Check if the added node is the volume slider element
      const volumeSlider = document.querySelector(".ytp-volume-panel");
      if (volumeSlider) {
        // Volume slider found! Do something with it.
        console.log("Volume slider appeared!");
        // Your code to change the volume goes here
        volumeSlider.addEventListener("click", () => {
          volumeSlider.blur();
        });
      }
    }
  }
});

// Options for the observer (we want to observe changes to the entire document)
const observerOptions = {
  childList: true,
  subtree: true,
};

// Start observing the document for changes
observer.observe(document, observerOptions);
