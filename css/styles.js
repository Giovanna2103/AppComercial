import {StyleSheet} from 'react-native';

export const styleFormat = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems:"center",

    },

    logo:{
        width:"65%",
        height:"75%",
        marginRight:'auto',
        marginLeft:'auto',
        resizeMode:'contain',

    },

    btnApp:{
        flexDirection:'row',
        width:'90%',
        padding:10,
        backgroundColor:'#fff',
        borderRadius:15,
        shadowColor:'silver',
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:5

    },

    btn:{
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        flex:1

    },

})