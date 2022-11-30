var textWrapper = document.querySelector(".hello");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&<span></span>"
);

anime.timeline().add({
    targets: ".hello .letter",
    translateY: [200, 0],
    easing: "easeOutExpo",
    opacity: 1,
    duration: 1700,
    delay: (el, i) =>400 + 70 * i,
});

anime.timeline().add({
    targets: ".sub-hello",
    translateY: [200, 0],
    easing: "easeOutExpo",
    opacity: 1,
    duration: 1700,
    delay: (el, i) =>400 + 70 * i,
});
