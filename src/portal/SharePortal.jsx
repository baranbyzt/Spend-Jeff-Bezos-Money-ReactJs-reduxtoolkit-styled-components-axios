

import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import {WrapperDiv,Wrapperİnner,Content,ShareButton } from '../style/SharePortalStyled'
// get our fontawesome imports
import {faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import {selectMoney
} from '../redux/cardSlice'
import FooterComponent from '../components/FooterComponent'

import styles from '../style/General.module.css'

function SharePortal(){
    
   // itemlerin listesini
   const getMoneyData = useSelector(selectMoney);

    let portal_root = document.getElementById('portal');
    portal_root.style.visibility="hidden";

    let close_portal = () => {
        portal_root.style.visibility="hidden";
    }
    
// (187000000000-getMoneyData).toLocaleString('ar-US')
    const twitterShare = () => {
        window.location.href = `https://twitter.com/intent/tweet?url=
        I was able to spend ${(187000000000-getMoneyData).toLocaleString('ar-US')}$  amount of Jeff Bezos' 187 billion billion dollar fortune. can you help me ?
        https://github.com/baranbyzt/Spend-Jeff-Bezos-Money-ReactJs-reduxtoolkit-styled-components-axios`
    }

        return ReactDOM.createPortal(
   <WrapperDiv>

<Content>
    <FooterComponent/>
</Content>


<p onClick={close_portal}>
<FontAwesomeIcon className={styles.timesicon} icon={faTimes} />
    </p>
    <ShareButton onClick={ twitterShare}>share</ShareButton>

   </WrapperDiv>,document.getElementById('portal')
    )
    
    }
    
    
    export default SharePortal

// portal

/*
   const twitterShare = () => {
        window.location.href = `https://twitter.com/intent/tweet?url=adsf`}
    }

<ShareButton onClick={ twitterShare}>share</ShareButton>
*/