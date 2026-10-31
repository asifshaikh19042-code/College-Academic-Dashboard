export const percentage=(obtained,max)=>max?Math.round(obtained/max*1000)/10:0
export const grade=(p)=>p>=90?'A+':p>=80?'A':p>=70?'B+':p>=60?'B':p>=50?'C':p<40?'F':'D'
export const attendancePercentage=(present,total)=>total?Math.round(present/total*1000)/10:0
export const cgpa=(subjects)=>subjects.length?Math.round(subjects.reduce((s,x)=>s+(x.percentage||0)/10,0)/subjects.length*100)/100:0
export const downloadCSV=(filename,rows)=>{ if(!rows.length)return; const headers=Object.keys(rows[0]); const csv=[headers.join(','),...rows.map(r=>headers.map(h=>`"${String(r[h]??'').replaceAll('"','""')}"`).join(','))].join('\n'); const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'})); a.download=filename;a.click();URL.revokeObjectURL(a.href) }
export const downloadJSON=(filename,data)=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.download=filename;a.click();URL.revokeObjectURL(a.href)}
