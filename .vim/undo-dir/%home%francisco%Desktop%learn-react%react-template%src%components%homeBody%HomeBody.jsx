Vim�UnDo� %���p����>Ƽ�Q��~&�[��W�<>   
           <div>            !       !   !   !    `MU�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                /    const GlobalData = useContext(DataContext);5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                3    const GlobalServer = useContext(ServerContext);5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                ?    const [placeHolderData, setPlaceHolderData] = useState([]);5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                    useEffect(() => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                        GlobalServer.ping();5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                 5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                /        GlobalServer.testGET().then(result => {5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                ,            console.log({ result: result });5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                '            setPlaceHolderData(result);5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                        }).catch(err => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                &            console.log({ err: err });5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                
        })5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                    }, []);5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                    return (5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                5        <div className={style.homeBodyMainContainer}>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                1            <div className={style.userContainer}>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                6                <span>MyName: {GlobalData.name}</span>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                :                {placeHolderData.map((element, index) => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                N                    return <span key={index}>{element.name || "NoName"}</span>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                                })}5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                            </div>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                        </div>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                    )5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �         
              <div>�         	          �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �      	   
              <div></div>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `MU�    �      
                 �      
       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                <import { ServerContext } from '../../context/ServerContext';5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �                8import { DataContext } from '../../context/DataContext';5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                             `MU�     �         
              <div>5�_�                   !          ����                                                                                                                                                                                                                                                                                                                                                             `MU�    �         
      $        <div className={style.body}>5��