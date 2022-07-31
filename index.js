// 
// for rgb color

    //     main()
    // }
    
    
    // const main=()=>{
    //     const root =document.getElementById("root");
    //     const btn=document.getElementById("change-btn");
    
    //     btn.addEventListener("click",()=>{
    //         const bgColor =rgbColor();
    //         root.style.backgroundColor =bgColor;
    //     })
    //     console.log(btn,"vluih")
    // }
    // const rgbColor=()=>{
    //     const red=Math.floor(Math.random()*255);
    //     const green=Math.floor(Math.random()*255);
    //     const blue=Math.floor(Math.random()*255);
    
    //     return `rgb(${red},${green},${blue})`
    // }
    
    // For hex color
    
    window.onload=() => {
        main()
    }
    
    
    const main=()=>{
        const root =document.getElementById("root");
        const changeBtn=document.getElementById("change-btn");
        const output = document.getElementById("output");
        const copyBtn=document.getElementById("copy-btn");
    
        changeBtn.addEventListener("click",()=>{
            const bgColor =rgbColor();
            root.style.backgroundColor =bgColor;
            output.value =bgColor; 
        })
        copyBtn.addEventListener("click",()=>{
            navigator.clipboard.writeText(output.value);
        })
    }
    const rgbColor=()=>{
        const red=Math.floor(Math.random()*255);
        const green=Math.floor(Math.random()*255);
        const blue=Math.floor(Math.random()*255);
    
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }
    