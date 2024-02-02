import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import Web3 from "web3";
import { ColorRing } from  'react-loader-spinner' ;

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

function App() {
  useEffect(()=>{
   if(localStorage.getItem("userid")){
    setQr("block");

   }

  }, [])

const navigate = useNavigate();
const [ usdt , setUsdt ] = useState("");
const [ tokenprice , setTokenPrice ] = useState("");
const [ tokenForSend , settokenForSend ] = useState("");
 const [tosend , settosend] = useState("");
const [ connect , setConnect ] = useState("Connect wallet");
const [inputValue, setInputValue] = React.useState("");
const [inputValue1, setInputValue1] = React.useState("");
const [inputValue2, setInputValue2] = React.useState("");
const [show, setShow] = React.useState("none");

////////

const [lvlPrice, setLvlPrice] = React.useState(0);
const [userList, setUserList] = React.useState(0);
const [users, setUsers] = React.useState({});
const [exist, setExist] = React.useState(false); 
const [qr, setQr] = React.useState("none"); 




function handleInputChange(event) {

    setInputValue(event.target.value);
    console.log(event.target.value);
    
    
}



function handleInputChange1(event) {

  setInputValue1(event.target.value);
  console.log(event.target.value);
  
  
}

function handleInputChange2(event) {

  setInputValue2(event.target.value);
  console.log(event.target.value);
  
  
}


  useEffect(()=>{
    connectWallet();
    
    // LEVEL_PRICEs();
  

  }, [])





const connectWallet = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    var accounts = await window.web3.eth.getAccounts();

    setConnect(accounts[0].slice(0,4) + "..." + accounts[0].slice(-2) )
    userd();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

function handler (event) {
  console.log('Alerting!!!..Transfer Event Emitting',event.returnValues);
}

function errorCallback (err) {
  console.error(err);
}

  const LEVEL_PRICEs = async () => {
   
    const web3 = window.web3;
    const webeProvider = new Web3(Web3.givenProvider);
    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_currentUserId","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"incomeMissed","type":"uint256"}],"stateMutability":"view","type":"function"}]
    var contractaddress = '0x679595dB28A19C66e9013832ea122F6F4374A23f';

    const instance = new web3.eth.Contract(abi, contractaddress);

console.log("start");



  

   

  };




  const userLists = async (info) => {
   
    const web3 = window.web3;
    const webeProvider = new Web3(Web3.givenProvider);
    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_currentUserId","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"incomeMissed","type":"uint256"}],"stateMutability":"view","type":"function"}]
    var contractaddress = '0x679595dB28A19C66e9013832ea122F6F4374A23f';

    const instance = new web3.eth.Contract(abi, contractaddress);

    var lvlp =  await instance.methods.userList(info).call();
    setUserList(lvlp);


  };

  

  const userd = async () => {
   
    const web3 = window.web3;
    const webeProvider = new Web3(Web3.givenProvider);
    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_currentUserId","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"incomeMissed","type":"uint256"}],"stateMutability":"view","type":"function"}]
    var contractaddress = '0x679595dB28A19C66e9013832ea122F6F4374A23f';

    const instance = new web3.eth.Contract(abi, contractaddress);


    var lvlp =  await instance.methods.users(accounts[0]).call();
    setUsers(lvlp);
    setExist(lvlp.isExist);
    console.log("users" , lvlp.isExist);


  };



// Registration



  const Register = async () => {
   
    const web3 = window.web3;
    const webeProvider = new Web3(Web3.givenProvider);
    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_currentUserId","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"incomeMissed","type":"uint256"}],"stateMutability":"view","type":"function"}]
    var contractaddress = '0x679595dB28A19C66e9013832ea122F6F4374A23f';

     var abi_token = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_unfreezer","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Unfreeze","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_frozenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"freezeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"owners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unfreezeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
    var contractaddress_token = '0x01A0930263b9F19C87Fb16F33fBE2D9A6a0963c8';

    const instance = new web3.eth.Contract(abi, contractaddress);
    const instance_token = new web3.eth.Contract(abi_token, contractaddress_token);

    var Fees = await instance.methods.REGESTRATION_FESS().call();
    var Id = await instance.methods.currUserID().call();

    console.log( Fees);
    var payfess =  Fees ;

    setShow("block");

    await instance_token.methods.approve( contractaddress , payfess.toString() ).send({ from : accounts[0] , value : 0})
    .then(async ()=>{

      await instance.methods.Registration( inputValue , Fees).send({ from : accounts[0] , value : 0});
      localStorage.setItem("userid", Id );
      setShow("none");
  

    })
    .catch(()=>{
      setShow("none");

    })
         
   
    
     
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

        <ul className="navbar-nav action">


<li className="nav-item ml-2">
  
  <a  style={{display : qr}} onClick={()=> navigate('/QR')} href="#" className="btn ml-lg-auto btn-bordered-white"><i  />Receive QR </a>
</li>
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

  <section className="staking-area" id="stake">
    <div className="container">
      <div className="row">
        <div className="">
          <div className="card no-hover staking-card single-staking">
            <h3 className="m-0">Merchant Dashboard </h3>
           
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
            
              <div className="input-area d-flex flex-column flex-md-row">
                <div className="input-text">
                  <input value={ inputValue }  onChange={handleInputChange }  placeholder="id" />
                
                </div>
                <a onClick={Register} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Registration</a>
              </div>
            </div>
                </div>
              </div>
              
            
            </div>
          
            <span>Register With Smart Reward Point</span>
            {/* <span>Referral Commision upto 6%</span> */}
          </div>
        </div>



        
        
      </div>


<div >

      <div style={{marginTop :"8%"}} className="row">
        <div className="">
          <div className="card no-hover staking-card single-staking">
            <h3 className="m-0">Merchant Dashboard Info </h3>
           
            <div className="tab-content mt-md-3" id="myTabContent">
              <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                  
                  </div>

                  <div className="input-box my-4">
            
                  {/* <span>{lvlPrice}</span>
              <div style={{marginBottom :"4%"}} className="input-area d-flex flex-column flex-md-row">
             
                <div className="input-text">
                
                  <input value={ inputValue }  onChange={handleInputChange }  placeholder="Level Price" />
                
                </div>
                <a  onClick={ ()=> LEVEL_PRICEs(inputValue)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Level Price</a>
              </div> */}


              <span  >{userList}</span>
              <div style={{marginTop :"2%"}} className="input-area d-flex flex-column flex-md-row">
             
                <div  className="input-text">
                
                  <input value={ inputValue1 }  onChange={handleInputChange1 }  placeholder="Users List" />
                
                </div>
                <a onClick={ ()=> userLists(inputValue1)}  href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">User List</a>
              </div>


            </div>
        
           
                </div>
       
              </div>

              
              
            
            </div>

       
          
         
            {/* <span>Referral Commision upto 6%</span> */}
          </div>
        </div>



        
        
      </div>

      <div style={{marginTop :"8%"}} className="row1">
        <div className="">
          <div className="card no-hover staking-card single-staking">
            <h3 className="m-0">Merchant Dashboard Info </h3>
           
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

            <table style={{width :"70%"}}>
            <tr >
    <td>Exist</td>
    <td> {exist.toString()}</td>
  
  </tr>

  <tr  >
    <td>ID</td>
    <td>{users.id}</td>
  
  </tr>

  <tr  >
    <td>Referrer ID</td>
    <td> {users.referrerID}</td>
  
  </tr>

  <tr  >
    <td>Referred Users</td>
    <td> {users.referredUsers}</td>
  
  </tr>

  <tr  >
    <td>Income</td>
    <td> {users.income/100}</td>
  
  </tr>

  <tr  >
    <td>Level Income Received</td>
    <td> {users.levelIncomeReceived}</td>
  
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

export default App;
