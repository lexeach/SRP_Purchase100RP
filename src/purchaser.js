import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ColorRing } from  'react-loader-spinner' ;
import dayjs from "dayjs";


import Web3 from "web3";


import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

function Purchaser() {

const navigate = useNavigate();
const [ usdt , setUsdt ] = useState("");
const [ tokenprice , setTokenPrice ] = useState("");
const [ tokenForSend , settokenForSend ] = useState("");
 const [tosend , settosend] = useState("");
const [ connect , setConnect ] = useState("Connect wallet");
const [inputValue, setInputValue] = React.useState("");
const [inputValue1, setInputValue1] = React.useState("");
const [inputValue2, setInputValue2] = React.useState("");
const [inputValue3, setInputValue3] = React.useState("");
const [users, setUsers] = React.useState({});

const [active, setActive] = React.useState(0);
const [active1, setActive1] = React.useState(0);
const [show, setShow] = React.useState("none");

const [userList, setUserList] = React.useState("");

const [rReward, serRReward] = React.useState("");
const [tReward, serTReward] = React.useState("");

const [event, setEvent] = React.useState([]);

function handleInputChange(event) {
  
    setInputValue(event.target.value);

    if(event.target.value > 5000){
      alert("More than 5000 is not allowes")
      setInputValue(0);

    }
    
    
}


function handleInputChange1(event) {

  setInputValue1(event.target.value);
  console.log(event.target.value);
  
  
}

function handleInputChange2(event) {

  setInputValue2(event.target.value);
  console.log(event.target.value);
  
  
}

function handleInputChange3(event) {

  setInputValue3(event.target.value);
  console.log(event.target.value);
  
  
}


  useEffect(()=>{

    var referrer = window.location.href.toString(); 
    console.log("data " , referrer.substr(31));
    settosend(referrer.substr(31))
    
    connectWallet();
   
    userd();
  

  }, [])



  const Purchase = async () => {
   
    const web3 = window.web3;
    const webeProvider = new Web3(Web3.givenProvider);
    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_currentUserId","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"receivedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"incomeMissed","type":"uint256"}],"stateMutability":"view","type":"function"}];
    var contractaddress = '0x679595dB28A19C66e9013832ea122F6F4374A23f';

     var abi_token = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_unfreezer","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Unfreeze","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_frozenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"freezeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"owners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unfreezeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
    var contractaddress_token = '0x01A0930263b9F19C87Fb16F33fBE2D9A6a0963c8';

    const instance = new web3.eth.Contract(abi, contractaddress);
    const instance_token = new web3.eth.Contract(abi_token, contractaddress_token);


    var payfess =  inputValue * 100 ;

 console.log(tosend) ; 
 setShow("block");
    await instance_token.methods.approve( contractaddress , payfess.toString() ).send({ from : accounts[0] , value : 0})
    .then(async ()=>{

      await instance.methods.purchase( tosend , payfess ).send({ from : accounts[0] , value : 0});
      setShow("none");
    

    }).catch(()=>{
      setShow("none");

    })
         
   
    
     
  };


  const userLists = async (info) => {
   
    const web3 = window.web3;
    const webeProvider = new Web3(Web3.givenProvider);
    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_currentUserId","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"receivedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"incomeMissed","type":"uint256"}],"stateMutability":"view","type":"function"}];
    var contractaddress = '0x679595dB28A19C66e9013832ea122F6F4374A23f';

    const instance = new web3.eth.Contract(abi, contractaddress);

    var lvlp =  await instance.methods.pool1userList(info).call();
    setUserList(lvlp);


  };


const connectWallet = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    var accounts = await window.web3.eth.getAccounts();

    setConnect(accounts[0].slice(0,4) + "..." + accounts[0].slice(-2) )
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};



const userd = async () => {
   
  const web3 = window.web3;
  const webeProvider = new Web3(Web3.givenProvider);
  var accounts = await window.web3.eth.getAccounts();

  var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_currentUserId","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"receivedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"incomeMissed","type":"uint256"}],"stateMutability":"view","type":"function"}];
  var contractaddress = '0x679595dB28A19C66e9013832ea122F6F4374A23f';

  const instance = new web3.eth.Contract(abi, contractaddress);


  var lvlp =  await instance.methods.pool1activeUserID().call();
  var lvlp1 =  await instance.methods.pool1currUserID().call();


  var rreward =  await instance.methods.receivedRewards(accounts[0]).call();
  var rTeward =  await instance.methods.totalRewards(accounts[0]).call();

 


  setActive(lvlp);

  setActive1(lvlp1);
  serRReward(rreward);
  serTReward(rTeward);

  const eventName = 'regPoolEntry';
  const fromBlock = 0;
  const toBlock = 'latest';
  
  instance.getPastEvents(eventName, {
    fromBlock,
    toBlock
  }, (error, events) => {
    if (error) {
      console.error(error);
      return;
    }

    var newArr = []  ;

    for(var i = 0 ; i< events.length  ; i++){
    
      console.log(events[i].returnValues._user);
      if(accounts[0] == events[i].returnValues._user){
        newArr.push({id : events[i].returnValues._currentUserId , time : events[i].returnValues._time})
        setEvent(newArr);
      }

      console.log(newArr);

    }
    console.log(newArr);
  


  });
 
  console.log(event);
  


};



 


const userde = async (info ) => {
   
  const web3 = window.web3;
  const webeProvider = new Web3(Web3.givenProvider);
  var accounts = await window.web3.eth.getAccounts();

  var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_currentUserId","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"receivedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"incomeMissed","type":"uint256"}],"stateMutability":"view","type":"function"}];
  var contractaddress = '0x679595dB28A19C66e9013832ea122F6F4374A23f';

  const instance = new web3.eth.Contract(abi, contractaddress);


  var lvlp =  await instance.methods.pool1users(info , accounts[0]).call();
  setUsers(lvlp);



};




  return (
    <div className="App">







<div className="main">
  {/* ***** Header Start ***** */}
  <header id="header">
    {/* Navbar */}
    <nav data-aos="zoom-out" data-aos-delay={800} className="navbar gameon-navbar navbar-expand">
      <div className="container header">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src="/img/logo/logo.png" alt="Brand Logo" />
        </a>
        <div className="ml-auto" />
        {/* Navbar Nav */}
       
       
        {/* Navbar Icons */}
        {/* Navbar Toggler */}
        {/* <ul className="navbar-nav toggle">
          <li className="nav-item">
            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
              <i className="icon-menu m-0" />
            </a> 
           </li>
        </ul> */}
        {/* Navbar Action Button */}

        <ul className="navbar-nav action">



</ul>
        <ul className="navbar-nav action">


          <li className="nav-item ml-2">
            {/* <a style={} href='https://metamask.app.link/dapp/' >go to mobile</a> */}
            <a onClick={connectWallet} href="#" className="btn ml-lg-auto btn-bordered-white"><i className="icon-wallet mr-md-2" />{connect}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  {/* ***** Header End ***** */}
  {/* ***** Hero Area Start ***** */}
  
  {/* ***** Hero Area End ***** */}
  {/* ***** Staking Area Start ***** */}
  <section className="staking-area" id="stake">
    <div className="container">
      <div className="row">
        <div className="">
          <div className="card no-hover staking-card single-staking">
            <h3 className="m-0">Smart Reward Point </h3>
           
            <div className="tab-content mt-md-3" id="myTabContent">
              <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                  
                  
                  </div>


                  <div className="input-box my-4">
            
            
<div style={{zIndex :"2" , position :"absolute" , left:"40%" , display :show}}>
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#0046ff', '#FFFFFF', '#FFFFFF', '#0046ff', '#FFFFFF']}
/>

</div>

           <div style={{width :"90%"}} className="input-area d-flex flex-column flex-md-row">
                <div className="input-text">
                  <input value={ tosend }  onChange={handleInputChange }  disabled placeholder="Shop ID" />
                
                </div>
               
               
              </div>

              <div style={{marginTop :"4%"}} className="input-area d-flex flex-column flex-md-row">
                <div className="input-text">
                  <input value={ inputValue }  onChange={handleInputChange }  placeholder="Amount" />
                
                </div>
               
                <a onClick={Purchase} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">PAY</a>
              </div>
            </div>
                </div>
              </div>
              
            
            </div>

           
            {/* <span>Referral Commision upto 6%</span> */}
          </div>
        </div>



        
        
      </div>


<div  >

     

     


      <div  style={{marginTop :"8%"}} className="row1">
        <div className="">
          <div className="card no-hover staking-card single-staking">
            <h3 className="m-0"> User Detail </h3>
           
            <div className="tab-content mt-md-3" id="myTabContent">
              <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                  
                  
                  </div>


                  <div className="input-box my-4">
            
            

            
                 




          
            </div>
                </div>
       
              </div>

              
              
            
            </div>
            <table style={{width :"50%"}}>
            <tr>
   
  <td>
  <b>   Received Rewards </b> 
  </td>
  <td>
  <b>  {rReward/100}</b> 
  </td>

  
 </tr>

 <tr style={{marginLeft:"-10%"}}>
   
   <td>
    <b>Total Rewards</b> 
   </td>
   <td>
   <b>  {tReward/100} </b> 
   </td>
 
   
  </tr>

            </table>
      
          
         
            {/* <span>Referral Commision upto 6%</span> */}
          </div>
        </div>



        
        
      </div>

      </div>


    </div>




  </section>



  

</div>


















    </div>
  );
}

export default Purchaser;
