Vim�UnDo� ��B�����șo�$'�A�d��L���xR�U                                     b-$�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             b-"�     �                  �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             b-#/     �                const socket = new Server()5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             b-#0     �               		�             �               	�             �                   5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             b-#Y     �               .		token: localStorage.getItem('token') || '';'5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             b-#Z     �               -		token: localStorage.getItem('token') || '''5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             b-#Z     �               ,		token: localStorage.getItem('token') || ''5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             b-#[     �               -		token: localStorage.getItem('token') || '';5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             b-#^     �                 })5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             b-#`     �                  �               5�_�   	              
   	       ����                                                                                                                                                                                                                                                                                                                                                             b-#�     �   	            	�   	      
    �                 const socketReducer = (state)5�_�   
                 	   4    ����                                                                                                                                                                                                                                                                                                                                                             b-#�     �      
         5const socketReducer = (state = socket, action = {}) {5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             b-#�     �   	   
          	retu5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             b-#�    �   
            		�   
          �   	            	�   	      
    5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                       	          V       b-$b     �      	          8const socketReducer = (state = socket, action = {}) => {   	switch(action.type) {   		default: return state;   	}   }5�_�                            ����                                                                                                                                                                                                                                                                                                                            	           	          V       b-$c    �                 5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        b-$�    �                 $import {io} from 'socket.io-client';       const socket = io({   	extraHeaders: {   ,		token: localStorage.getItem('token') || ''   	}   });5��