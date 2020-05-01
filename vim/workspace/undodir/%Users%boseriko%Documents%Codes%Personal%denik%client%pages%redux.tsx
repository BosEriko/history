Vim�UnDo� "Ƽ�*�,w$�|=M&=R�{�hN"��fN�ˤ   #   // ANCHOR: Layout             
       
   
   
    ^�#(    _�                        	    ����                                                                                                                                                                                                                                                                                                                                                             ^�"     �                // ANCHOR React5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        ^�"[     �                   �               �                 // ANCHOR: React   import * as React from 'react';   6import { useSelector, useDispatch } from 'react-redux'       // ANCHOR Components   8import { CenteredLayout } from 'layouts/CenteredLayout';       Jimport { incrementAction, decrementAction } from '../utils/redux/action/';       interface IRootState {     counterReducer: number;     isLoggedReducer: boolean;   }       export default () => {   K  const counter = useSelector((state: IRootState) => state.counterReducer);   M  const isLogged = useSelector((state: IRootState) => state.isLoggedReducer);   !  const dispatch = useDispatch();       
  return (       <CenteredLayout>   
      <ul>   #        <li>Count: { counter }</li>   W        <li><button onClick={() => dispatch(incrementAction(5))}>increase</button></li>   W        <li><button onClick={() => dispatch(decrementAction(5))}>decrease</button></li>   ?        <li>User Is Logged In: { isLogged ? 'Yes' : 'No' }</li>         </ul>       </CenteredLayout>     )   }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       ^�"_    �         #      // ANCHOR: Sign In Page5�_�                       <    ����                                                                                                                                                                                                                                                                                                                               <          C       v   C    ^�"~    �         #      M  const isLogged = useSelector((state: IRootState) => state.isLoggedReducer);5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       ^�"�    �         #        isLoggedReducer: boolean;�         #    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       ^�"�     �         #        authenticateReducer: boolean;�         #    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       ^�"�     �         #      Q  const isLogged = useSelector((state: IRootState) => state.authenticateReducer);5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                v       ^�"�    �         #      I  const  = useSelector((state: IRootState) => state.authenticateReducer);5�_�      
           	      !    ����                                                                                                                                                                                                                                                                                                                               !          (       v   (    ^�"�    �          #      ?        <li>User Is Logged In: { isLogged ? 'Yes' : 'No' }</li>�          #    5�_�   	               
          ����                                                                                                                                                                                                                                                                                                                            #                      V        ^�#'    �         #      // ANCHOR: Layout 5��