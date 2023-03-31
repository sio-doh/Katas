/* 

*/

async function execute(action, nTimes) {
    let result = [];
    for(let i = 0; i < nTimes; i++) {
        result.push(action());
    }
    await Promise.all(result);
}