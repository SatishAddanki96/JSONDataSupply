// let CommonMaguva = require("./Clients/Maguva");
let CommonMaguva = require("./Clients/Maguva/EntryFile");


let StartFunc = async ({ inClientName, inPurchasePK, inDataPk }) => {
    switch (inClientName) {
        case "Maguva":
            let LocalFromMaguva = await CommonMaguva.StartFunc({ inPurchasePK, inDataPk });

            return await LocalFromMaguva;
            break;

        default:
            break;
    };
};

module.exports = { StartFunc };
