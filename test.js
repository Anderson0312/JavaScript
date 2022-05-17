a =""
s ="527918932189"

for(i=1; i<len(s)-1; i++) {
    if (Math.abs(s[i-1]-s[1+1] ==s[i])) {
        a+=s[i]
    }
}

link = "www.multsoft.set/" + a
console.log(link)