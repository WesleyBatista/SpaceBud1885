# 👾 invaderz

Copycat of [jeremychone-channel/rust-invaders](https://github.com/jeremychone-channel/rust-invaders) - [Rust Bevy - Full Tutorial - Game Dev](https://www.youtube.com/watch?v=j7qHwb7geIM&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q)

## 🚀 Snippets

#### Execute the game in a window

```
cargo run --features bevy/dynamic
```

#### Build wasm (faster build, slower game performance)

```
wasm-pack build --dev --target web .
```

#### Build wasm (slower build, faster game performance)

```
wasm-pack build --target web .
```

#### Test wasm import from index.html

```
npm i -g http-server
http-server .
```

> :info: _Use CTRL+SHIFT+R_ to invalidate cache

## 📝 Resources

- Rust:
  - [Rust Book](https://doc.rust-lang.org/book/)
  - [Rust Video Course](https://www.youtube.com/playlist?list=PL7r-PXl6ZPcB4jn1_VR3D8tSK9DxOaiQE)
- Bevy:
  - [Official Bevy Web Site](https://bevyengine.org/)
  - [Official Bevy Book](https://bevyengine.org/learn/book/introduction/)
  - [Unofficial Bevy Cheat Book](https://bevy-cheatbook.github.io/)
  - [Official Bevy API Doc](https://docs.rs/bevy/latest/bevy/index.html)
  - [Official Bevy Assets](https://bevyengine.org/assets/)
  - [Offical GitHub examples](https://github.com/bevyengine/bevy/tree/latest/examples)
  - [Great Blog Post - snake game](https://mbuffett.com/posts/bevy-snake-tutorial/)
- Assets:
  - [Player, Laser, Enemy Sprites](https://opengameart.org/content/space-shooter-redux)
  - [Explosion](https://opengameart.org/content/explosion)
