import React from 'react';

function TitleComponent({ title }) {
    return (
        <div className="w-[400px] h-16 px-4 flex-col justify-center items-start inline-flex">
            <div className="self-stretch h-[62px] bg-slate-100 flex-col justify-between items-start flex">
                <div className="self-stretch h-[62px] py-6 justify-start items-center gap-8 inline-flex">
                    <h3 className="extended-title">{title}</h3>
                    <div className="grow shrink basis-0 h-8 justify-end items-center gap-4 flex">
                        <div className="grow shrink basis-0 h-8 flex-col justify-between items-end inline-flex">
                            <div className="self-stretch h-8 rounded justify-end items-center gap-2 inline-flex">
                                <div className="w-[18px] h-[18px] rounded flex-col justify-center items-center gap-2.5 inline-flex">
                                    <div className="w-[13px] h-[13px] relative">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-8 h-8 rounded flex-col justify-center items-center gap-2.5 inline-flex" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleComponent;
