let currentEm = ":)";

const generateRandomEmote = () => {
    // get a random member of the array
    const r = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    const style1 = () => {
        const mouths = [")", "(", "O", "D", "P", "/", "{", "}", "[", "]", "3"];
        const eyes = [":", ";"];
        const noses = ["-", "*", "~", ""];
        return r(eyes) + r(noses) + r(mouths);
    };

    const style2 = () => {
        const leftSides = ["(", "<(", "\\(", "—("];
        const eyes = ["o", "O", "-", "X", "T", "*", "@", "^", "~", "!"];
        const mouths = ["o", "_", ".", "x"];
        const rightSides = [")", ")>", ")/", ")—"];

        const ey = r(eyes);
        return r(leftSides) + ey + r(mouths) + ey + r(rightSides);
    };

    const styles = [style1, style2];

    return r(styles)();
};

// set a new random emote
const setRandomEmote = () => {
    currentEm = generateRandomEmote();
    document.getElementById("emote").innerHTML = currentEm;
    document.getElementById("copy").innerText = "Copy";
};

const copyEmote = () => {
    // create a dummy element so we can copy the emote to the clipboard
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = currentEm;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    // set copied
    document.getElementById("copy").innerText = "Copied!";
};

window.onload = () => {
    setRandomEmote();
};
