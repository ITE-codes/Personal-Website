class BowlingScore {
 constructor(){this.frames=Array.from({length:10},()=>[]);this.frame=0;this.done=false;this.remaining=10}
 add(pins){if(this.done)return;const r=this.frames[this.frame];pins=Math.max(0,Math.min(this.remaining,Math.floor(pins)));r.push(pins);this.remaining-=pins;let fresh=false;
 if(this.frame<9){if(pins===10||r.length===2){this.frame++;this.remaining=10;fresh=true}}
 else{if(r.length===1&&pins===10){this.remaining=10;fresh=true}if(r.length===2){if(r[0]===10){if(pins===10){this.remaining=10;fresh=true}}else if(r[0]+r[1]===10){this.remaining=10;fresh=true}else this.done=true}if(r.length===3)this.done=true}return fresh}
 totals(){let sum=0,blocked=false;return this.frames.map((r,i)=>{if(blocked||!r.length){blocked=true;return null}let value;if(i===9){if(!this.done)return null;value=r.reduce((a,b)=>a+b,0)}else{const next=this.frames.slice(i+1).flat();if(r[0]===10){if(next.length<2){blocked=true;return null}value=10+next[0]+next[1]}else if(r.length===2&&r[0]+r[1]===10){if(!next.length){blocked=true;return null}value=10+next[0]}else if(r.length===2)value=r[0]+r[1];else{blocked=true;return null}}sum+=value;return sum})}
 symbols(i){const r=this.frames[i];return r.map((n,j)=>{if(n===0)return '–';if(n===10)return 'X';if(j===1&&r[0]!==10&&r[0]+n===10)return '/';if(i===9&&j===2&&r[0]===10&&r[1]!==10&&r[1]+n===10)return '/';return String(n)})}
}
if(typeof module!=='undefined')module.exports=BowlingScore;
