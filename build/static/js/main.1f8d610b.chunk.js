(this.webpackJsonphsilog=this.webpackJsonphsilog||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),s=t(11),p=t.n(s),d=(t(23),t.p,t(24),t(3)),u=t(6),y=t(9),r=t(5),l=t.n(r),o=t(7),m=new(t(14).a)({supportedChainIds:[10001]}),c=t(0),T=function(){var e=Object(o.b)(),n=(e.account,e.activate),t=e.active,i=(e.chainId,e.connector,e.deactivate,e.error,e.provider,e.setError,Object(a.useState)("")),s=Object(y.a)(i,2),p=(s[0],s[1],Object(a.useState)("")),r=Object(y.a)(p,2),T=r[0],b=r[1];Object(a.useEffect)((function(){}),[]);var x=0,f=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var n,t,a,i;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==x&&(n=function(){a>=100?(clearInterval(i),x=0,document.getElementById("myProgress").style.display="none",document.getElementById("loadlabel").style.display="none"):(a++,t.style.width=a+"%")},x=1,t=document.getElementById("myBar"),a=10,i=setInterval(n,2));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var a,i;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=14;break}return console.log("MetaMask is installed!"),e.next=4,n(m);case 4:return e.next=6,m.activate();case 6:return a=e.sent,i=a.provider,new l.a(i),"undefined"!==typeof window.ethereum&&t&&alert("MetaMask Connected"),e.next=12,I();case 12:e.next=15;break;case 14:alert("install MetaMask");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var v=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var n,t,a,i,s,p,u,y,r,o,c,b,x,f;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=prompt("Please enter liquidation id","Liquidation ID"),e.next=3,m.activate();case 3:return t=e.sent,a=t.provider,i=new l.a(a),e.next=8,i.eth.getAccounts();case 8:return s=e.sent,e.next=11,new i.eth.Contract([{inputs:[{internalType:"address",name:"hexAddress",type:"address"},{internalType:"uint256",name:"hexLaunch",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"claimant",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"Claim",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"borrower",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"LoanEnd",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"bidder",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"},{indexed:!0,internalType:"uint40",name:"liquidationId",type:"uint40"}],name:"LoanLiquidateBid",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"liquidator",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"},{indexed:!0,internalType:"uint40",name:"liquidationId",type:"uint40"}],name:"LoanLiquidateExit",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"borrower",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"},{indexed:!0,internalType:"uint40",name:"liquidationId",type:"uint40"}],name:"LoanLiquidateStart",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"borrower",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"LoanPayment",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"borrower",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"LoanStart",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"minter",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"borrower",type:"address"},{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"calcLoanPayment",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"borrower",type:"address"},{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"calcLoanPayoff",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"},{internalType:"address",name:"hsiStarterAddress",type:"address"}],name:"claimInstanced",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"stakeIndex",type:"uint256"},{internalType:"uint40",name:"stakeId",type:"uint40"}],name:"claimNative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentDay",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"dailyDataList",outputs:[{internalType:"uint72",name:"dayMintedTotal",type:"uint72"},{internalType:"uint72",name:"dayLoanedTotal",type:"uint72"},{internalType:"uint72",name:"dayBurntTotal",type:"uint72"},{internalType:"uint32",name:"dayInterestRate",type:"uint32"},{internalType:"uint8",name:"dayMintMultiplier",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"hsim",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"liquidationList",outputs:[{internalType:"uint256",name:"liquidationStart",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"},{internalType:"uint96",name:"bidAmount",type:"uint96"},{internalType:"address",name:"liquidator",type:"address"},{internalType:"uint88",name:"endOffset",type:"uint88"},{internalType:"bool",name:"isActive",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"loanInstanced",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"loanLiquidate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"liquidationId",type:"uint256"},{internalType:"uint256",name:"liquidationBid",type:"uint256"}],name:"loanLiquidateBid",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"uint256",name:"liquidationId",type:"uint256"}],name:"loanLiquidateExit",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"loanPayment",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"loanPayoff",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"loanedSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"mintInstanced",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"stakeIndex",type:"uint256"},{internalType:"uint40",name:"stakeId",type:"uint40"}],name:"mintNative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"proofOfBenevolence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"shareList",outputs:[{components:[{internalType:"uint40",name:"stakeId",type:"uint40"},{internalType:"uint72",name:"stakeShares",type:"uint72"},{internalType:"uint16",name:"lockedDay",type:"uint16"},{internalType:"uint16",name:"stakedDays",type:"uint16"}],internalType:"struct HEXStakeMinimal",name:"stake",type:"tuple"},{internalType:"uint16",name:"mintedDays",type:"uint16"},{internalType:"uint8",name:"launchBonus",type:"uint8"},{internalType:"uint16",name:"loanStart",type:"uint16"},{internalType:"uint16",name:"loanedDays",type:"uint16"},{internalType:"uint32",name:"interestRate",type:"uint32"},{internalType:"uint8",name:"paymentsMade",type:"uint8"},{internalType:"bool",name:"isLoaned",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],"0x3819f64f282bf135d62168C1e513280dAF905e06");case 11:return p=e.sent,e.next=14,new i.eth.Contract([{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"hexAddress",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!0,internalType:"uint256",name:"hsiTokenId",type:"uint256"},{indexed:!0,internalType:"address",name:"hsiAddress",type:"address"},{indexed:!0,internalType:"address",name:"staker",type:"address"}],name:"HSIDetokenize",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!0,internalType:"address",name:"hsiAddress",type:"address"},{indexed:!0,internalType:"address",name:"staker",type:"address"}],name:"HSIEnd",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!0,internalType:"address",name:"hsiAddress",type:"address"},{indexed:!0,internalType:"address",name:"staker",type:"address"}],name:"HSIStart",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!0,internalType:"uint256",name:"hsiTokenId",type:"uint256"},{indexed:!0,internalType:"address",name:"hsiAddress",type:"address"},{indexed:!0,internalType:"address",name:"staker",type:"address"}],name:"HSITokenize",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!0,internalType:"address",name:"hsiAddress",type:"address"},{indexed:!0,internalType:"address",name:"oldStaker",type:"address"},{indexed:!0,internalType:"address",name:"newStaker",type:"address"}],name:"HSITransfer",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{components:[{name:"account",type:"address"},{name:"value",type:"uint96"}],indexed:!1,internalType:"struct LibPart.Part[]",name:"royalties",type:"tuple[]"}],name:"RoyaltiesSet",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",payable:!1,type:"event"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"}],name:"getRaribleV2Royalties",outputs:[{components:[{name:"account",type:"address"},{name:"value",type:"uint96"}],internalType:"struct LibPart.Part[]",name:"",type:"tuple[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"",type:"address"},{indexed:!1,internalType:"uint256",name:"",type:"uint256"}],name:"hsiLists",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"",type:"uint256"}],name:"hsiToken",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"user",type:"address"}],name:"hsiCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"user",type:"address"}],name:"stakeCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"hsiIndex",type:"uint256"}],name:"stakeLists",outputs:[{components:[{name:"stakeId",type:"uint40"},{name:"stakedHearts",type:"uint72"},{name:"stakeShares",type:"uint72"},{name:"lockedDay",type:"uint16"},{name:"stakedDays",type:"uint16"},{name:"unlockedDay",type:"uint16"},{name:"isAutoStake",type:"bool"}],internalType:"struct HEXStake",name:"",type:"tuple"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"length",type:"uint256"}],name:"hexStakeStart",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"hsiIndex",type:"uint256"},{indexed:!1,internalType:"address",name:"hsiAddress",type:"address"}],name:"hexStakeEnd",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"hsiIndex",type:"uint256"},{indexed:!1,internalType:"address",name:"hsiAddress",type:"address"}],name:"hexStakeTokenize",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"hexStakeDetokenize",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"holder",type:"address"},{indexed:!1,internalType:"uint256",name:"hsiIndex",type:"uint256"},{indexed:!1,internalType:"address",name:"hsiAddress",type:"address"},{components:[{components:[{name:"stakeId",type:"uint40"},{name:"stakeShares",type:"uint72"},{name:"lockedDay",type:"uint16"},{name:"stakedDays",type:"uint16"}],name:"_stake",type:"tuple"},{name:"_mintedDays",type:"uint256"},{name:"_launchBonus",type:"uint256"},{name:"_loanStart",type:"uint256"},{name:"_loanedDays",type:"uint256"},{name:"_interestRate",type:"uint256"},{name:"_paymentsMade",type:"uint256"},{name:"_isLoaned",type:"bool"}],indexed:!1,internalType:"struct ShareCache",name:"share",type:"tuple"}],name:"hsiUpdate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"address",name:"currentHolder",type:"address"},{indexed:!1,internalType:"uint256",name:"hsiIndex",type:"uint256"},{indexed:!1,internalType:"address",name:"hsiAddress",type:"address"},{indexed:!1,internalType:"address",name:"newHolder",type:"address"}],name:"hsiTransfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"salePrice",type:"uint256"}],name:"royaltyInfo",outputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"royaltyAmount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{indexed:!1,internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}],"0x8BD3d1472A656e312E94fB1BbdD599B8C51D18e3");case 14:return u=e.sent,e.next=17,p.methods.liquidationList(n).call();case 17:return y=e.sent,e.next=20,u.methods.hsiCount("0x0000000000000000000000000000000000000000").call();case 20:r=e.sent,c=(o=T-n)<30?r-(o+3):o>20?Math.round(o/10):o,alert("checking HSI index for "+y.hsiAddress+" Please wait"),x=c;case 25:if(!(x<r)){e.next=34;break}return e.next=28,u.methods.hsiLists("0x0000000000000000000000000000000000000000",x).call();case 28:(f=e.sent)===y.hsiAddress&&(b=x,alert(f+",,,"+y.hsiAddress+", HSI index is "+x)),setTimeout((function(){}),500);case 31:x++,e.next=25;break;case 34:return e.next=36,p.methods.loanLiquidateExit(b,n).send({from:s[0],gas:"900000"}).then((function(e){alert("completed :) click ok to continue...")})).catch((function(e){alert("action not completed"),console.log(e)}));case 36:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var n,t,a,i,s,p,u,y,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.activate();case 2:return n=e.sent,t=n.provider,a=new l.a(t),e.next=7,new a.eth.Contract([{inputs:[{internalType:"address",name:"hexAddress",type:"address"},{internalType:"uint256",name:"hexLaunch",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"claimant",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"Claim",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"borrower",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"LoanEnd",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"bidder",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"},{indexed:!0,internalType:"uint40",name:"liquidationId",type:"uint40"}],name:"LoanLiquidateBid",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"liquidator",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"},{indexed:!0,internalType:"uint40",name:"liquidationId",type:"uint40"}],name:"LoanLiquidateExit",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"borrower",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"},{indexed:!0,internalType:"uint40",name:"liquidationId",type:"uint40"}],name:"LoanLiquidateStart",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"borrower",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"LoanPayment",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"borrower",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"LoanStart",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"data",type:"uint256"},{indexed:!0,internalType:"address",name:"minter",type:"address"},{indexed:!0,internalType:"uint40",name:"stakeId",type:"uint40"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"borrower",type:"address"},{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"calcLoanPayment",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"borrower",type:"address"},{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"calcLoanPayoff",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"},{internalType:"address",name:"hsiStarterAddress",type:"address"}],name:"claimInstanced",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"stakeIndex",type:"uint256"},{internalType:"uint40",name:"stakeId",type:"uint40"}],name:"claimNative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentDay",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"dailyDataList",outputs:[{internalType:"uint72",name:"dayMintedTotal",type:"uint72"},{internalType:"uint72",name:"dayLoanedTotal",type:"uint72"},{internalType:"uint72",name:"dayBurntTotal",type:"uint72"},{internalType:"uint32",name:"dayInterestRate",type:"uint32"},{internalType:"uint8",name:"dayMintMultiplier",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"hsim",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"liquidationList",outputs:[{internalType:"uint256",name:"liquidationStart",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"},{internalType:"uint96",name:"bidAmount",type:"uint96"},{internalType:"address",name:"liquidator",type:"address"},{internalType:"uint88",name:"endOffset",type:"uint88"},{internalType:"bool",name:"isActive",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"loanInstanced",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"loanLiquidate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"liquidationId",type:"uint256"},{internalType:"uint256",name:"liquidationBid",type:"uint256"}],name:"loanLiquidateBid",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"uint256",name:"liquidationId",type:"uint256"}],name:"loanLiquidateExit",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"loanPayment",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"loanPayoff",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"loanedSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"hsiIndex",type:"uint256"},{internalType:"address",name:"hsiAddress",type:"address"}],name:"mintInstanced",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"stakeIndex",type:"uint256"},{internalType:"uint40",name:"stakeId",type:"uint40"}],name:"mintNative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"proofOfBenevolence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"shareList",outputs:[{components:[{internalType:"uint40",name:"stakeId",type:"uint40"},{internalType:"uint72",name:"stakeShares",type:"uint72"},{internalType:"uint16",name:"lockedDay",type:"uint16"},{internalType:"uint16",name:"stakedDays",type:"uint16"}],internalType:"struct HEXStakeMinimal",name:"stake",type:"tuple"},{internalType:"uint16",name:"mintedDays",type:"uint16"},{internalType:"uint8",name:"launchBonus",type:"uint8"},{internalType:"uint16",name:"loanStart",type:"uint16"},{internalType:"uint16",name:"loanedDays",type:"uint16"},{internalType:"uint32",name:"interestRate",type:"uint32"},{internalType:"uint8",name:"paymentsMade",type:"uint8"},{internalType:"bool",name:"isLoaned",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],"0x3819f64f282bf135d62168C1e513280dAF905e06");case 7:return i=e.sent,16109377,p="",u=[],y=[],e.next=14,i.getPastEvents("LoanLiquidateStart",{fromBlock:16109377,toBlock:"latest"}).then((function(e){s=e,console.log(s)})).catch((function(e){return console.error(e)}));case 14:for(p="<table><tr><th>Index</th><th>StakeID</th><th>LiquidationId</th><th>action</th></tr>",r=0;r<s.length;r++)p+="<tr><td>"+r+"</td><td>"+s[r].returnValues.stakeId+"</td><td>"+s[r].returnValues.liquidationId+"</td><td id='bid-button' className='bid-button'><button className='bidnow' onclick='{bid("+s[r].returnValues.liquidationId+","+r+")}'>bid now</button></td></tr>",u[r]=s[r].returnValues.stakeId,y[r]=s[r].returnValues.liquidationId,console.log(s[r].returnValues.stakeId+"stakeId"),console.log(s[r].returnValues.liquidationId+"liquidationId"),b(s[r].returnValues.liquidationId);return e.next=18,f();case 18:document.getElementById("userView").innerHTML=p+"</table>";case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"pill-nav",children:[Object(c.jsx)("a",{className:"active",href:"#home",children:"Home"}),Object(c.jsx)("a",{href:"#news",children:"About"}),Object(c.jsx)("a",{href:"#contact",children:"Contact"}),Object(c.jsx)("a",{href:"#about",children:"Info"})]}),Object(c.jsx)("button",{className:"btn info",onClick:h,children:"CONNECT METAMASK"}),Object(c.jsx)("div",{id:"myProgress",children:Object(c.jsx)("div",{id:"myBar"})}),Object(c.jsx)("div",{id:"loadlabel",children:"Connect Wallet To View"}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("p",{className:"title1",children:"Active Bids for 0x.."}),Object(c.jsx)("p",{className:"price",children:"item 1"}),Object(c.jsx)("p",{className:"price",children:"item 2"}),Object(c.jsx)("p",{className:"price",children:"item 3"}),Object(c.jsx)("p",{className:"entry",children:"more info"}),Object(c.jsx)("p",{children:Object(c.jsx)("button",{onClick:v,children:"Exit Liquidation"})})]}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{id:"userView"})]}),Object(c.jsx)("div",{className:"optional",children:"Donate to support dev: 0xFa637B89f0bDcBc1C6604965c2A50ce807b9ea34"})]})};function b(e,n){return new l.a(e)}var x=function(){return Object(c.jsx)(o.a,{getLibrary:b,children:Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(T,{})})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,s=n.getLCP,p=n.getTTFB;t(e),a(e),i(e),s(e),p(e)}))};p.a.createRoot(document.getElementById("root")).render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})),f()}},[[27,1,2]]]);
//# sourceMappingURL=main.1f8d610b.chunk.js.map