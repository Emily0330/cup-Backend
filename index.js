const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//post request
/*
const { exec } = require('child_process');

app.post('/example', function(req, res) {
  exec('node ./path/to/your/token-minting-program.js', (error, stdout, stderr) => {
    if (error) {
      console.error(exec error: ${error});
      return;
    }
    console.log(stdout: ${stdout});
    console.error(stderr: ${stderr});
  });
});
*/
//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
app.get('/api',(req,res)=>{
    res.send('API Page')
})

// endpoint for minting a token (requires authentication)
app.use(express.urlencoded({ extended: true }))//是在設定接受的請求格式(?)用express.urlencoded()中介軟體來解析URL編碼的請求body
app.post('/api', (req, res) => { //app.post("/mint", requireAuth, async (req, res) => {
	try {
        //res.send('success!-1');
        console.log(req.body); // 輸出 { name: 'John', age: 30 }
        res.send('已接收到資料')
        console.log('success!!');//test
		//const { to, amount } = req.body; // get the "to" address and "amount" from the request body
		//const contract = new web3.eth.Contract(ABI, TOKEN_CONTRACT_ADDRESS); // create a contract instance using your token contract ABI and address
		//const result = await contract.methods
			//.mint(to, amount)
			//.send({ from: web3.eth.defaultAccount }); // use the contract method to mint the token
		/*res.status(200).send(
			//`Token minted with transaction hash: ${result.transactionHash}`
            `Token minted with transaction hash: success!!`//for testing
		);*/
	} catch (err) {
		console.error(err);
		res.status(500).send("Error while minting token");
	}
});
/*app.use(express.json());
app.post('/', (req, res) => {
    res.send('success!-1');
    console.log(req.body); // 輸出 { name: 'John', age: 30 }
    res.send('已接收到資料');
  });*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})