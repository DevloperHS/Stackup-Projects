src = "https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
type = "application/javascript"

const provider = new ethers.providers.Web3Provider(window.ethereum,"goerli");

const MoodContractAddress = "0x887b1f9F4fc9a09c3dEA077563421aF5f6bC7d7A";
const MoodContractABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_mood",
                type: "string",
            },
        ],
        name: "setMood",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getMood",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then(function (accounts) {
        signer = provider.getSigner(accounts[0]);
        MoodContract = new ethers.Contract(
            MoodContractAddress,
            MoodContractABI,
            signer
        );
    });
});

async function getMood() {
    const getMoodPromise = MoodContract.getMood();
    const Mood = await getMoodPromise;
    console.log(Mood);
}

async function setMood() {
    const mood = document.getElementById("mood").value;
    const setMoodPromise = MoodContract.setMood(mood);
    await setMoodPromise;
}
