nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)
nnoremap <silent> gh :call <SID>show_documentation()<CR>
nmap <leader>rn <Plug>(coc-rename)
nnoremap <silent> K :call CocAction('doHover')<CR>
nmap <leader>cf  <Plug>(coc-format-selected)
