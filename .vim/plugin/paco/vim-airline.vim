    if !exists('g:airline_symbols')
      let g:airline_symbols = {}
    endif

    let g:airline#extensions#tabline#enabled = 1
    let g:airline#extensions#tabline#buffer_idx_mode = 1
    let g:airline#extensions#tabline#fnamemod = ':t'
    let g:airline#extensions#tabline#left_sep = ''
    let g:airline#extensions#tabline#left_alt_sep = ''
    let g:airline#extensions#tabline#right_sep = ''
    let g:airline#extensions#tabline#right_alt_sep = ''
    let g:airline#extensions#tabline#formatter = 'default'

    " unicode symbols
    let g:airline_left_sep = 'Β»'
    let g:airline_left_sep = 'βΆ'
    let g:airline_right_sep = 'Β«'
    let g:airline_right_sep = 'β'
    let g:airline_symbols.crypt = 'π'
    let g:airline_symbols.linenr = 'β'
    let g:airline_symbols.linenr = 'β€'
    let g:airline_symbols.linenr = 'ΒΆ'
    let g:airline_symbols.maxlinenr = 'β°'
    let g:airline_symbols.maxlinenr = ''
    let g:airline_symbols.branch = 'β'
    let g:airline_symbols.paste = 'Ο'
    let g:airline_symbols.paste = 'Γ'
    let g:airline_symbols.paste = 'β₯'
    let g:airline_symbols.spell = 'κ¨'
    let g:airline_symbols.notexists = 'β'
    let g:airline_symbols.whitespace = 'Ξ'

	nnoremap <leader>q :bp<cr>:bd #<cr>
""""""""""""""""""""""""""""""""""""
nnoremap <silent> <TAB> :bnext<CR>
" SHIFT-TAB will go back
 " SHIFT-TAB va para atras
nnoremap <silent> <S-TAB> :bprevious<CR>

