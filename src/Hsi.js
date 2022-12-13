import Web3 from 'web3';
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injectedProvider } from "./wallet-connector";


const Hsi = () => {
    var {
    account,
    activate,
    active,
    chainId,
    connector,
    deactivate,
    error,
    provider,
    setError,
    } = useWeb3React();

    useEffect(() => {


       }, []);


    var i = 0;

    const move = async()=> {
      if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 10;
      var id = setInterval(frame, 2);
      function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("myProgress").style.display = "none";
        document.getElementById("loadlabel").style.display = "none";
      } else {
        width++;
        elem.style.width = width + "%";
        }
      }
    }
  }


  	const handleConnect = async () => {
      if (typeof window.ethereum !== 'undefined') {
          console.log('MetaMask is installed!');
          await activate(injectedProvider);
          let { provider } = await injectedProvider.activate();
          let web3 = new Web3(provider); 
          if(typeof window.ethereum!=='undefined' && active) {alert("MetaMask Connected")}
          await getAuction();
      }

      else alert("install MetaMask");
    
  }


    const getAuction = async () => {
        let {provider}  = await injectedProvider.activate();
        let web3 = new Web3(provider);
        const HEDRON_CONTRACT = await new web3.eth.Contract([{"inputs":[{"internalType":"address","name":"hexAddress","type":"address"},{"internalType":"uint256","name":"hexLaunch","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":true,"internalType":"address","name":"claimant","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"LoanEnd","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"},{"indexed":true,"internalType":"uint40","name":"liquidationId","type":"uint40"}],"name":"LoanLiquidateBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":true,"internalType":"address","name":"liquidator","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"},{"indexed":true,"internalType":"uint40","name":"liquidationId","type":"uint40"}],"name":"LoanLiquidateExit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"},{"indexed":true,"internalType":"uint40","name":"liquidationId","type":"uint40"}],"name":"LoanLiquidateStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"LoanPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"LoanStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"}],"name":"calcLoanPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"}],"name":"calcLoanPayoff","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"},{"internalType":"address","name":"hsiStarterAddress","type":"address"}],"name":"claimInstanced","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"stakeIndex","type":"uint256"},{"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"claimNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dailyDataList","outputs":[{"internalType":"uint72","name":"dayMintedTotal","type":"uint72"},{"internalType":"uint72","name":"dayLoanedTotal","type":"uint72"},{"internalType":"uint72","name":"dayBurntTotal","type":"uint72"},{"internalType":"uint32","name":"dayInterestRate","type":"uint32"},{"internalType":"uint8","name":"dayMintMultiplier","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hsim","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"liquidationList","outputs":[{"internalType":"uint256","name":"liquidationStart","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"},{"internalType":"uint96","name":"bidAmount","type":"uint96"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"uint88","name":"endOffset","type":"uint88"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"}],"name":"loanInstanced","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"}],"name":"loanLiquidate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidationId","type":"uint256"},{"internalType":"uint256","name":"liquidationBid","type":"uint256"}],"name":"loanLiquidateBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"uint256","name":"liquidationId","type":"uint256"}],"name":"loanLiquidateExit","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"}],"name":"loanPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"}],"name":"loanPayoff","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"loanedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"hsiIndex","type":"uint256"},{"internalType":"address","name":"hsiAddress","type":"address"}],"name":"mintInstanced","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"stakeIndex","type":"uint256"},{"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"mintNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"proofOfBenevolence","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"shareList","outputs":[{"components":[{"internalType":"uint40","name":"stakeId","type":"uint40"},{"internalType":"uint72","name":"stakeShares","type":"uint72"},{"internalType":"uint16","name":"lockedDay","type":"uint16"},{"internalType":"uint16","name":"stakedDays","type":"uint16"}],"internalType":"struct HEXStakeMinimal","name":"stake","type":"tuple"},{"internalType":"uint16","name":"mintedDays","type":"uint16"},{"internalType":"uint8","name":"launchBonus","type":"uint8"},{"internalType":"uint16","name":"loanStart","type":"uint16"},{"internalType":"uint16","name":"loanedDays","type":"uint16"},{"internalType":"uint32","name":"interestRate","type":"uint32"},{"internalType":"uint8","name":"paymentsMade","type":"uint8"},{"internalType":"bool","name":"isLoaned","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}], "0x3819f64f282bf135d62168C1e513280dAF905e06");
        var START_BLOCK = 16046848;
        var eventsData;
        var userView = "";
        var hsiArray = [];
        var hsiArray2 =[];

       await HEDRON_CONTRACT.getPastEvents("LoanLiquidateStart",
                  {                               
            fromBlock: START_BLOCK,     
            toBlock: 'latest'         
                  })                              
            .then(events => {eventsData = events; console.log(eventsData); document.getElementById("4b").style.height = "360px";})
            .catch((err) => console.error(err));

            userView="<table><tr><th>Index</th><th>StakeID</th><th>LiquidationId</th></tr>";
            for(var i=0; i<eventsData.length; i++) 
              {
                 userView += "<tr><td>"+i+"</td><td>"+eventsData[i].returnValues.stakeId+"</td><td>"+eventsData[i].returnValues.liquidationId+"</td></tr>";
                      hsiArray[i] = eventsData[i].returnValues.stakeId;
                      hsiArray2[i] = eventsData[i].returnValues.liquidationId;
                      console.log(eventsData[i].returnValues.stakeId + "stakeId");
                      console.log(eventsData[i].returnValues.liquidationId + "liquidationId");
              }

              await move();
              document.getElementById("userView").innerHTML = userView+"</table>";

            
    }

     return (
       <>
        <div className="pill-nav">
          <a className="active" href="#home">Home</a>
          <a href="#news">Page 1</a>
          <a href="#contact">Page 2</a>
          <a href="#about">Page 3</a>
        </div> 
        <button className="btn info" onClick={handleConnect}>CONNECT METAMASK</button>
        <div id="myProgress">
          <div id="myBar"></div>
        </div>
        <div id="loadlabel">Connect Wallet To View</div>
        <div className="content">
          <br/>
          <br/>
          <br/>
    	    <div id="userView"></div>
        </div>
       </>
	)
};

export default Hsi;