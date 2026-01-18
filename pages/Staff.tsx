
import React from 'react';
import { STAFF_DATA } from '../constants';

// 高精細な「みかんの断面」SVGアイコン
const MikanLinkIcon = () => (
  <svg viewBox="0 0 100 100" className="w-4 h-4 inline-block mx-1 -mt-1 align-middle drop-shadow-sm" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#F97316" />
    <circle cx="50" cy="50" r="42" fill="#FB923C" />
    <path d="M50 50 L50 10 A40 40 0 0 1 78.28 21.72 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L78.28 21.72 A40 40 0 0 1 90 50 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L90 50 A40 40 0 0 1 78.28 78.28 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L78.28 78.28 A40 40 0 0 1 50 90 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L50 90 A40 40 0 0 1 21.72 78.28 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L21.72 78.28 A40 40 0 0 1 10 50 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L10 50 A40 40 0 0 1 21.72 21.72 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L21.72 21.72 A40 40 0 0 1 50 10 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <circle cx="50" cy="50" r="6" fill="#FFF7ED" />
  </svg>
);

const Staff: React.FC = () => {
  const staff = STAFF_DATA[0];

  // 特定のテキストをMS PGothic Bold Italicでラップするヘルパー
  const renderFormattedText = (text: string) => {
    const target = "“Indonesia’s Garbage Clinic”";
    if (text.includes(target)) {
      const parts = text.split(target);
      return (
        <>
          {parts[0]}
          <span 
            style={{ 
              fontFamily: '"MS PGothic", "MS Ｐゴシック", "MSP Gothic", sans-serif', 
              fontWeight: 'bold', 
              fontStyle: 'italic' 
            }}
          >
            {target}
          </span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-[#fffaf0] font-maru text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pr-40 transition-all duration-500">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-wide font-maru">Staff</h1>
          <p className="text-orange-600 font-medium tracking-widest text-sm font-maru">スタッフ</p>
        </header>

        <section className="mb-16">
            <div className="text-left mb-10">
              <h2 className="text-lg md:text-xl font-bold text-black mb-3 font-maru tracking-widest">
                {staff.role}
              </h2>
              <div className="text-3xl md:text-5xl font-bold text-black font-maru tracking-tighter">
                {staff.name}
              </div>
            </div>
            <div className="text-lg leading-relaxed text-black whitespace-pre-wrap font-medium">
              {staff.profile}
            </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-black mb-8 border-b-2 border-orange-500 inline-block pb-1 font-maru">
            これまでの主な仕事
          </h3>
          
          <div className="space-y-12">
            {staff.history.map((group) => (
              <div key={group.id} className="w-full">
                {group.type === 'gray-bar' && (
                  <div className="bg-gray-100 py-2 px-4 mb-6 flex justify-between items-center">
                    <h4 className="font-bold text-black text-base">{group.title}</h4>
                    {group.title === 'NHK テレビ番組' && (
                      <span className="text-xs font-normal text-black">※P はプロデューサー</span>
                    )}
                  </div>
                )}

                {group.type === 'simple-header' && (
                  <h4 className="font-bold text-black text-base underline decoration-orange-200 underline-offset-8 mb-6 mt-8">
                    {group.title}
                  </h4>
                )}

                {group.type === 'year-box' && (
                  <div className="mb-6 mt-10 border-b-2 border-black pb-0.5">
                    <span className="text-lg font-bold text-black font-maru inline-block">
                      {group.title}
                    </span>
                  </div>
                )}

                <ul className="space-y-4 pl-1">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="text-base leading-relaxed text-black">
                      <div className="font-bold text-black">
                        {renderFormattedText(item.text)}
                      </div>
                      {item.notes && item.notes.length > 0 && (
                        <div className="mt-3 ml-4 text-sm sm:text-base text-black space-y-4">
                          {item.notes.map((note, nIdx) => {
                             const parts = note.split('👉');
                             const hasLink = parts.length > 1;
                             let linkText = '';
                             let linkUrl = '';
                             let suffixText = '';
                             
                             if (hasLink) {
                                 const rawLinkPart = parts[1].trim();
                                 const subParts = rawLinkPart.split('|');
                                 
                                 const urlIndex = subParts.findIndex(p => p.trim().startsWith('http'));
                                 
                                 if (urlIndex !== -1) {
                                     linkText = subParts.slice(0, urlIndex).join('|').trim();
                                     linkUrl = subParts[urlIndex].trim();
                                     if (subParts.length > urlIndex + 1) {
                                         suffixText = subParts.slice(urlIndex + 1).join('|');
                                     }
                                 } else {
                                     linkText = rawLinkPart;
                                     linkUrl = rawLinkPart;
                                 }
                             }
                             
                             const isHttp = linkUrl.startsWith('http');
                             const prefixText = parts[0];
                             const targetKeyword = "関連リンク";
                             const hasKeyword = prefixText.includes(targetKeyword);
                             
                             return (
                                <div key={nIdx}>
                                    {hasLink ? (
                                        <div className="group hover:bg-white p-2 rounded-lg border border-transparent hover:border-orange-100 transition-all shadow-sm leading-relaxed text-black">
                                            {hasKeyword ? (
                                              <>
                                                {renderFormattedText(prefixText.split(targetKeyword)[0])}
                                                <MikanLinkIcon />
                                                <span className="font-bold">{targetKeyword}</span>
                                              </>
                                            ) : (
                                              <>
                                                {renderFormattedText(prefixText)}
                                                <MikanLinkIcon />
                                              </>
                                            )}
                                            <a 
                                                href={isHttp ? linkUrl : '#'} 
                                                className="text-[#46667b] hover:text-[#2c3e50] underline font-bold transition-all ml-0.5"
                                                target={isHttp ? "_blank" : undefined}
                                                rel={isHttp ? "noopener noreferrer" : undefined}
                                            >
                                                {linkText}
                                            </a>
                                            {suffixText && (
                                              <span className="text-black ml-0.5 font-medium">
                                                {suffixText}
                                              </span>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="pl-6 border-l-2 border-black/10 ml-2 py-1 text-black font-medium">
                                          {renderFormattedText(note)}
                                        </div>
                                    )}
                                </div>
                             );
                          })}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Staff;
