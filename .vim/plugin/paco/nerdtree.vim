" NERDtree
map <C-n> :NERDTreeToggle<CR>
let NERDTreeWinSize=35
let NERDTreeCaseSensitiveSort=1
let NERDTreeWinPos=1
let NERDTreeShowHidden=1
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
