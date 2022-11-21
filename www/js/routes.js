const beforeEnter = async ({resolve, reject, router}) => {
  // 現在ログインしているユーザー情報を取得
  const currentUser = ncmb.User.getCurrentUser();
  // 認証していない場合はnullになる
  if (!currentUser) {
    // rejectを実行
    reject();
    // 認証画面に遷移
    router.navigate('/login/');
    // 処理完了
    return;
  }
  try {
    // データストアにダミーアクセス
    await ncmb.DataStore('Hello').fetch();
    // アクセスできればresolveを実行（元々指定されている画面を表示）
    resolve();
  } catch (e) {
    // 駄目だった場合は認証情報を削除
    localStorage.removeItem("NCMB/"+ncmb.apikey+"/currentUser");
    // rejectを実行
    reject();
    // 認証画面に遷移
    router.navigate('/login/');
  }  
};

const routes = [
  {
    path: '/',
    url: './index.html',
  },
  // カレンダー画面
  {
    path: '/home/',
    componentUrl: './pages/calendar.html',
    beforeEnter,
  },
  // ログイン画面
  {
    path: '/login/',
    componentUrl: './pages/login.html',
  },
  // 予定追加・更新画面
  {
    path: '/form/:id/',
    componentUrl: './pages/form.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
