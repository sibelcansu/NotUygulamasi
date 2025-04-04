## Notlar Uygulaması (Node.js)

Bu uygulama, terminal üzerinden not ekleyip yönetmenizi sağlar. **Node.js**'in fs modülünü kullanarak notları bir JSON dosyasında saklar.

📌 **Kurulum**

Öncelikle, bilgisayarınızda **Node.js** yüklü olduğundan emin olun. Eğer sisteminizde **Node.js** yüklü değilse, aşağıdaki linkten yükleyebilirsiniz:

[Node.js Download](https://nodejs.org/tr)

Ardından, projeyi klonlayıp terminalde aşağıdaki adımları takip edin:

```sh
git clone https://github.com/sibelcansu/NotUygulamasi.git 
cd NotUygulamasi
```


🚀 **Kullanım**

**Yeni Not Ekleme**

Yeni bir not eklemek için aşağıdaki komutu kullanabilirsiniz:

`node index.js ekle "Buraya notunuzu yazın!"`

**Tüm Notları Listeleme**

Kayıtlı tüm notları listelemek için:

`node index.js listele`

**Belirli Bir Notu Silme**

Belirli bir ID'ye sahip notu silmek için:

`node index.js sil <ID>`

Örneğin, ID'si 2 olan notu silmek için:

`node index.js sil 2`

🔧 **Özellikler**

**notlar.json** dosyası otomatik olarak oluşturulur.

Notlar ID ile saklanır.

Hata yönetimi için try/catch blokları kullanılmıştır.

Notları ekleme, listeleme ve silme işlemleri desteklenir.
