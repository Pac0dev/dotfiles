" Stop acting like classic vi
set nocompatible            " disable vi compatibility mode
set history=1000            " increase history size
set noswapfile              " don't create swapfiles
set nobackup                " don't backup, use git!
set nowritebackup
let mapleader = ' '

" Enable filetype
filetype indent plugin on

" Persist undo history between file editing sessions.
set undofile
set undodir=~/.vim/undodir

" Modify indenting settings
set autoindent              " autoindent always ON.

" Modify some other settings about files
set encoding=utf-8          " always use unicode (god damnit, windows)
set backspace=indent,eol,start " backspace always works on insert mode
set hidden

" Mark trailing spaces depending on whether we have a fancy terminal or not
if &t_Co > 2
	highlight ExtraWhitespace ctermbg=1
	match ExtraWhitespace /\s\+$/
else
	set listchars=trail:~
	set list
endif

" Colorscheme configuration.
if &t_Co > 2
	syntax on
	color default
	set background=dark

	highlight Folded cterm=reverse ctermbg=0 ctermfg=8
	highlight VertSplit cterm=NONE ctermbg=NONE ctermfg=8
	highlight Conceal cterm=NONE ctermbg=NONE ctermfg=8

	highlight DiffAdd ctermfg=green cterm=bold
	highlight DiffDelete ctermfg=red cterm=bold
	highlight DiffChange ctermfg=yellow

	set colorcolumn=80

	" Syntax often gets messed up on files with multiple languages
	noremap <F12> <Esc>:syntax sync fromstart<CR>
	inoremap <F12> <C-o>:syntax sync fromstart<CR>
endif

" Use a specific pipe ch
set fillchars+=vert:\┊

set noshowmode
set laststatus=1        " always show statusbar
set wildmenu            " enable visual wildmenu

set nowrap              " don't wrap long lines
set number              " show line numbers
set relativenumber      " show numbers as relative by default
set showmatch           " higlight matching parentheses and bracketsñkj
set relativenumber

xnoremap K :move '<-2<CR>gv-gv
xnoremap J :move '>+1<CR>gv-gv

"esc
inoremap ñ <Esc>
inoremap Ñ <Esc>
cnoremap ñ <Esc>
cnoremap Ñ <Esc>
map ñ <Esc>
map Ñ <Esc>


"save shortcut
nnoremap s :update<CR>
"quit
nnoremap q :q<CR>
"close buffer
nnoremap zz :bwipe<CR>

"split window
nmap sh :split<Return><C-w>w
nmap sv :vsplit<Return><C-w>w

"SHIT TABS
nnoremap <silent> <TAB> :bnext<CR>
nnoremap <silent> <S-TAB> :bnext<CR>

" Resize window
nmap <left> <C-w><
nmap <right> <C-w>>
nmap <up> <C-w>+
nmap <down> <C-w>
