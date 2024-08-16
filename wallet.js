function generateMnemonic() {
    return ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
}

function generateWallet() {
    const wallet = ethers.Wallet.createRandom();
    return {
        publicKey: wallet.address,
        privateKey: wallet.privateKey
    };
}

document.getElementById("btn-ph").addEventListener("click", function() {
    const mnemonic = generateMnemonic();
    document.getElementById("phrase").innerText = mnemonic;
});

document.getElementById("btn-wallet").addEventListener("click", function() {
    const wallet = generateWallet();
    document.getElementById("public-key").innerText = wallet.publicKey;
    document.getElementById("private-key").innerText = wallet.privateKey;
});