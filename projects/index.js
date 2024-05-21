const { get_account_tvl } = require("../helper/chain/eos");

const tokens = [
    ["eosio.token", "EOS", "eos"],
    ["tethertether", "USDT", "tether"],
    ["btc.ptokens", "PKBTC", "ptokens-btc"],
    ["token.defi", "BOX", "defibox"],
    ["minedfstoken", "DFS", "defis-network"],
    ["pink.bank", "PINK", "pink-token"],
    ["dappservices", "DAPP", "dapp"],
    ["token.newdex", "DEX", "newdex-token"],
    ["chexchexchex", "CHEX", "chex-token"],
    ["everipediaiq", "IQ", "everipedia"],
    ["eosiotptoken", "TPT", "token-pocket"],
    ["core.ogx", "OGX", "organix"],
    ["pizzatotoken", "PIZZA", "pizza-usde"],
    ["dao.pink", "PKDAO", "pink-DAO"]
]

// https://swapdao.app
// Daoswap
async function eos() {
    return await get_account_tvl("swapdao.app", tokens);
}

module.exports = {
    methodology: `Daoswap TVL is achieved by querying token balances from their swap pool smart contract.`,
    eos: {
        tvl: eos
    },
}